import { Button } from "react-bootstrap";

export interface CustomButtonProps {
    className?: string,
    text: string
  }

  export const CustomButton = (props: CustomButtonProps) => {
    return (
      <div className={"p-1"}>
        <Button className={props.className}>{props.text}</Button>
      </div>
    );
  };
  export default CustomButton;
  