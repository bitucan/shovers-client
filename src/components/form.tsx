/* eslint-disable no-constant-condition */
import { useShover } from "../hooks";
import { Button } from "./atoms/button";
import { FORM_INPUTS, FORM_SHOVERS_ID, GENDERS, TALENTS } from "./consts";
import { InputGroups } from "./atoms/input-groups";
import { InputOther } from "./molecules/other-input";
import ImageUploader from "./molecules/image-uploader";
import Select from "./molecules/select";
import VideoUploader from "./molecules/video-uploader";
import Logos from "./atoms/logos";
import { Label } from "./atoms/label";
import { SpanInput } from "./atoms/span";
import { Input } from "./atoms/input";
import { DataPicker } from "./atoms/data-picker";
import { useGetPets } from "../hooks/useGetPets";
import { useGetTalents } from "../hooks/useGetTalents";
import PhoneInput from "./atoms/phone-inpunt";
import { Loader2 } from "lucide-react";

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
    isLoading,
  } = useShover();

  const { data: pets } = useGetPets();
  const { data: talents } = useGetTalents();

  return (
    <div
      id={FORM_SHOVERS_ID}
      className="form-shovers pt-10 flex justify-center items-center"
    >
      <div className="max-w-[1200px]">
        <form onSubmit={handleSubmit}>
          <div className="text-black  font-bold mb-10">
            *SI ES PARA MASCOTAS, POR FAVOR, LLENAR LOS DATOS DE LA MASCOTA Y EN
            EL APARTADO 'OTRO' LLENAR EL NOMBRE DEL PROPIETARIO
          </div>

          <div className="flex flex-col gap-6">
            <InputGroups>
              <Label className="w-full flex gap-2">
                <SpanInput>nombre completo</SpanInput>
                <Input name={FORM_INPUTS.FULL_NAME} onChange={handleOnChange} />
              </Label>
              <Label className="w-full flex gap-2">
                <SpanInput className="flex justify-start">email</SpanInput>
                <Input
                  type="email"
                  name={FORM_INPUTS.EMAIL}
                  onChange={handleOnChange}
                />
              </Label>
            </InputGroups>

            <InputGroups>
              <Label className="w-full flex gap-2">
                <SpanInput>teléfono</SpanInput>
                <PhoneInput
                  value={shover.phone_number}
                  onChange={handleOnChange}
                />
              </Label>

              <Label className="w-full flex gap-2">
                <SpanInput>fecha de nacimiento</SpanInput>
                <DataPicker
                  date={shover.day_of_birth}
                  onSelectDate={handleOnChange}
                />
              </Label>
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
                options={talents}
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
                options={pets}
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
            {/* 
            <ImageUploader label="foto" onUpload={handleImageChange} />
            <VideoUploader label="video" onUpload={handleVideoChange} /> */}
          </div>

          <div className="w-full mt-6 flex justify-center items-center">
            <Button
              disabled={isLoading}
              className="w-24 h-10 px-2 disabled:bg-gray-500"
            >
              {isLoading ? (
                <div className="w-full flex items-center justify-center">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              ) : (
                "enviar"
              )}
            </Button>
          </div>
        </form>

        <Logos />
      </div>
    </div>
  );
};

export default FormShover;
