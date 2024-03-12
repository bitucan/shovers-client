import { useState, ComponentProps } from "react";
import { SpanInput } from "../atoms/span";
import { InputFile } from "../atoms/input-file";

type Props = ComponentProps<"input"> & {
  label: string;
  onUpload: (files: FileList) => void;
};

type ImageUploadHandlerProps = ComponentProps<"input"> & {
  onUpload: (files: FileList) => void;
};

function ShowImageUploaded({
  images,
  onUpload,
}: {
  images: any;
  onUpload: (value: any) => void;
}) {
  const [previewImage, setPreviewImage] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [imageToDeleteIndex, setImageToDeleteIndex] = useState<number | null>(
    null
  );

  const handleDelete = (index: number) => {
    setImageToDeleteIndex(index);
  };

  const handlePreview = (file: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result as string;
      setPreviewImage(imageUrl);
      setShowModal(true);
    };

    reader.readAsDataURL(file);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPreviewImage("");
  };

  function toKB(kilobytes: number) {
    const megabytes = Math.floor(kilobytes / 1024);
    return megabytes;
  }

  const handleConfirmDelete = () => {
    if (imageToDeleteIndex !== null) {
      const updatedImages = [...images];
      updatedImages.splice(imageToDeleteIndex, 1);
      console.log(updatedImages.splice(imageToDeleteIndex, 1));
      onUpload(updatedImages);
      setImageToDeleteIndex(null);
    }
  };

  const handleCancelDelete = () => {
    setImageToDeleteIndex(null);
  };

  return (
    <>
      {images.length > 0 && (
        <>
          <table className="w-full border-collapse border border-gray-400">
            <tbody className="w-full">
              <tr>
                <th className="border border-gray-400 px-4 py-2">Nombre</th>
                <th className="border border-gray-400 px-4 py-2">Extensión</th>
                <th className="border border-gray-400 px-4 py-2">Tamaño</th>

                <th className="border border-gray-400 px-4 py-2">Acciones</th>
              </tr>
              {images?.map((image: any, index: any) => (
                <>
                  <tr>
                    <td className="border text-center border-gray-400 px-4 py-2">
                      {image.name}
                    </td>
                    <td className="border text-center border-gray-400 px-4 py-2">
                      {image.type}
                    </td>
                    <td className="border  text-center border-gray-400 px-4 py-2">
                      {toKB(image.size)}
                    </td>
                    <td className="border flex justify-center items-center gap-4 border-gray-400 px-4 py-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                        onClick={() => handlePreview(image)}
                        type="button"
                      >
                        Previsualizar
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        onClick={() => handleDelete(index)}
                        type="button"
                      >
                        eliminar
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
          {showModal && (
            <div className="fixed top-0 left-0 w-full h-full  flex items-center justify-center bg-gray-900 bg-opacity-50 ">
              <div className="w-[500px]  bg-white p-4 rounded-lg">
                <div className="mb-4 w-full flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={handleCloseModal}
                  >
                    Cerrar
                  </button>
                </div>
                <img
                  src={previewImage}
                  alt="Previsualización"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          )}
        </>
      )}
      {imageToDeleteIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <p>¿Estás seguro de que deseas eliminar esta imagen?</p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => handleConfirmDelete()}
                type="button"
              >
                Eliminar
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleCancelDelete()}
                type="button"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ImageUploadHandler({ onUpload }: ImageUploadHandlerProps) {
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && onUpload) {
      console.log(files);
      onUpload(files);
    }
  };

  return (
    <div className="flex flex-row items-center">
      <InputFile
        accept="image/*"
        onChange={handlePhotoChange}
        multiple
        hidden
        id="input-image"
      />
    </div>
  );
}

function ImageUploader({ onUpload, label, ...props }: Props) {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleUpload = (files: FileList) => {
    const fileList = Array.from(files);
    setSelectedImages(selectedImages.concat(fileList));
    if (onUpload) {
      onUpload(files);
    }
  };

  return (
    <label className="flex flex-col gap-6">
      <div className="flex gap-2">
        <SpanInput>{label}</SpanInput>
        <ImageUploadHandler onUpload={handleUpload} {...props} />
        <Requirements />
      </div>

      <ShowImageUploaded onUpload={setSelectedImages} images={selectedImages} />
    </label>
  );
}

function Requirements() {
  return (
    <ul className="uppercase text-[10px] font-bold">
      <li>3 fotos cuerpo entero: frontal y perfiles</li>
      <li>3 fotos en primero plano: frontal y perfiles</li>
      <li className="text-[#ff0000]">*sin filtros</li>
    </ul>
  );
}

export default ImageUploader;
