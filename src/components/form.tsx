import { useShover } from "../hooks";
import { Button } from "./atoms/button";
import { FORM_INPUTS, GENDERS, PETS, TALENTS } from "./consts";
import { InputText } from "./molecules/input-text";
import { InputGroups } from "./atoms/input-groups";
import { InputOther } from "./molecules/other-input";
import ImageUploader from "./molecules/image-uploader";
import Select from "./molecules/select";
import VideoUploader from "./molecules/video-uploader";
import Logos from "./atoms/logos";

function userSelectOther(value: string) {
  return value.toLowerCase() === "otro";
}

const FormShover = () => {
  const {
    handleImageChange,
    handleOnChange,
    handleSubmit,
    handleVideoChange,
    shover,
  } = useShover();

  return (
    <div className="form-shovers pt-10 flex justify-center items-center">
      <div className="max-w-[1200px]">
        <form onSubmit={handleSubmit}>
          <div className="text-black  font-bold mb-10">
            *SI ES PARA MASCOTAS, POR FAVOR, LLENAR LOS DATOS DE LA MASCOTA Y EN
            EL APARTADO 'OTRO' LLENAR EL NOMBRE DEL PROPIETARIO
          </div>

          <div className="flex flex-col gap-6">
            <InputText
              name={FORM_INPUTS.NAME}
              label="nombre completo"
              onChange={handleOnChange}
              className="flex-col"
            />

            <InputGroups>
              <InputText
                name={FORM_INPUTS.PHONE}
                label="teléfono"
                onChange={handleOnChange}
              />
              <InputText
                name={FORM_INPUTS.AGE}
                label="edad"
                onChange={handleOnChange}
              />
            </InputGroups>

            <InputGroups>
              <Select
                name={FORM_INPUTS.GENDER}
                options={GENDERS}
                label="género"
                onChange={handleOnChange}
              />

              <InputOther
                name={FORM_INPUTS.OTHER_GENDER}
                selectOther={userSelectOther(shover.gender)}
                label="otro"
                onChange={handleOnChange}
              />
            </InputGroups>

            <InputGroups>
              <Select
                name={FORM_INPUTS.TALENT}
                options={TALENTS}
                label="talento"
                onChange={handleOnChange}
              />
              <InputOther
                name={FORM_INPUTS.OTHER_TALENT}
                selectOther={userSelectOther(shover.talent)}
                label="otro"
                onChange={handleOnChange}
              />
            </InputGroups>

            <InputGroups>
              <Select
                name={FORM_INPUTS.PET}
                options={PETS}
                label="mascota"
                onChange={handleOnChange}
              />
              <InputOther
                name={FORM_INPUTS.OTHER_PET}
                selectOther={userSelectOther(shover.pet)}
                label="otro"
                onChange={handleOnChange}
              />
            </InputGroups>

            <ImageUploader label="foto" onUpload={handleImageChange} />
            <VideoUploader label="video" onUpload={handleVideoChange} />
          </div>

          <div className="w-full mt-6 flex justify-center items-center">
            <Button>enviar</Button>
          </div>
        </form>

        <Logos />
      </div>
    </div>
  );
};

export default FormShover;
