import { ComponentProps, useState, useEffect } from "react";
import { SpanInput } from "../atoms/span";
import { InputFile } from "../atoms/input-file";

type Props = ComponentProps<"input"> & {
  onUpload: any;
  label: string;
};

function VideoUploader({ onUpload, label, ...props }: Props) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [metadata, setMetadata] = useState<any>(null);
  const [isPreviewing, setIsPreviewing] = useState(false);

  useEffect(() => {
    if (selectedVideo) {
      handleVideoLoad(selectedVideo);
    }
  }, [selectedVideo]);

  const handleVideoLoad = (videoFile: File) => {
    const video = document.createElement("video");
    video.src = URL.createObjectURL(videoFile);
    video.onloadedmetadata = () => {
      setMetadata({
        duration: video.duration,
        width: video.videoWidth,
        height: video.videoHeight,
        size: videoFile.size,
        type: videoFile.type,
      });
    };
  };

  const handlePreviewClick = () => {
    setIsPreviewing(true);
  };

  const handleCloseModal = () => {
    setIsPreviewing(false);
  };

  const handleVideoChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedVideo(file);
    if (onUpload) {
      onUpload(file);
    }
  };

  return (
    <label className="flex flex-col gap-2">
      <div className="flex gap-2">
        <SpanInput>{label}</SpanInput>
        <InputFile
          id="video-input"
          accept="video/*"
          onChange={handleVideoChange}
          {...props}
        />
        <Requirements />
      </div>
      <div className="w-full flex justify-center items-center">
        {metadata && (
          <>
            <VideoMetadata
              metadata={metadata}
              onPreviewClick={handlePreviewClick}
            />
            {isPreviewing && (
              <VideoPreview
                videoFile={selectedVideo}
                onCloseModal={handleCloseModal}
              />
            )}
          </>
        )}
      </div>
    </label>
  );
}

function VideoMetadata({
  metadata,
  onPreviewClick,
}: {
  metadata: any;
  onPreviewClick: () => void;
}) {
  return (
    <div className="flex justify-start overflow-x-auto">
      <table className="w-full border-collapse border border-gray-400">
        <tbody className="w-full">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Duración</th>
            <th className="border border-gray-400 px-4 py-2">Ancho</th>
            <th className="border border-gray-400 px-4 py-2">Altura</th>
            <th className="border border-gray-400 px-4 py-2">Tamaño</th>
            <th className="border border-gray-400 px-4 py-2">Tipo</th>
            <th className="border border-gray-400 px-4 py-2">Acciones</th>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              {metadata.duration} segundos
            </td>
            <td className="border border-gray-400 px-4 py-2">
              {metadata.width}
            </td>
            <td className="border border-gray-400 px-4 py-2">
              {metadata.height}
            </td>
            <td className="border border-gray-400 px-4 py-2">
              {metadata.size} MB
            </td>
            <td className="border border-gray-400 px-4 py-2">
              {metadata.type}
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={onPreviewClick}
                type="button"
              >
                Previsualizar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function VideoPreview({
  videoFile,
  onCloseModal,
}: {
  videoFile: any;
  onCloseModal: () => void;
}) {
  return (
    <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4">
        <video width={500} height={500} controls>
          <source src={URL.createObjectURL(videoFile)} />
        </video>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={onCloseModal}
          type="button"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

function Requirements() {
  return (
    <ul className="uppercase text-[10px] font-bold">
      <li>
        agregue 1 video de máximo 2mins y con peso max de 30mb donde nos
        muestras lo que puedes hacer.
      </li>
      <li className="text-[#ff0000]">
        el tema y el género es libre (ej. monólogos, bailes, voces, etc)
      </li>
    </ul>
  );
}

export default VideoUploader;
