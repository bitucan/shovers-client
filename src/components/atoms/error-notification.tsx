type Props = {
  message: string;
};

export function ErrorNotification({ message }: Props) {
  return <div>{message}</div>;
}
