import React from "react";

type Props = {
  message: string;
};

export function ErrorNotification({ message }: Props) {
  return <div>{message}</div>;
}
