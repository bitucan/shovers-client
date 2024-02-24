import { ComponentProps, useState } from "react";
import { SpanInput } from "../atoms/span";
import { Input } from "../atoms/input";

type Props = ComponentProps<"input"> & {
  onUpload: any;
  label: string;
};

function VideoUploader({ onUpload, label, ...props }: Props) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedVideo(file);
    if (onUpload) {
      onUpload(file);
    }
  };

  return (
    <label className="flex gap-2 justify-center items-center">
      <SpanInput>{label}</SpanInput>
      <Input
        className="border-none"
        type="file"
        accept="video/*"
        onChange={handleVideoChange}
        {...props}
      />
      {selectedVideo && (
        <div>
          <p>Selected Video:</p>
          <video controls width="300">
            <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </label>
  );
}

export default VideoUploader;
