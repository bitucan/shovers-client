import { useState, ComponentProps } from "react";
import { SpanInput } from "../atoms/span";
import { Input } from "../atoms/input";

type Props = ComponentProps<"input"> & {
  label: string;
  onUpload: (files: FileList) => void;
};

type ImageUploadHandlerProps = ComponentProps<"input"> & {
  onUpload: (files: FileList) => void;
};

function ShowImageUploaded({ images }: { images: any }) {
  return (
    <>
      {images?.map((image: any, index: any) => (
        <div key={index}>
          <p>Selected Photo {index + 1}:</p>
          <img
            src={URL.createObjectURL(image)}
            alt={`Selected ${index + 1}`}
            width="200"
          />
        </div>
      ))}
    </>
  );
}

function ImageUploadHandler({ onUpload }: ImageUploadHandlerProps) {
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && onUpload) {
      onUpload(files);
    }
  };

  return (
    <Input
      className="border-none"
      type="file"
      accept="image/*"
      onChange={handlePhotoChange}
      multiple
    />
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
    <label className="flex gap-2">
      <SpanInput>{label}</SpanInput>
      <ImageUploadHandler onUpload={handleUpload} {...props} />
      <ShowImageUploaded images={selectedImages} />
    </label>
  );
}

export default ImageUploader;
