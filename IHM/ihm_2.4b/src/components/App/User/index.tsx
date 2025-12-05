import "./User.css";

export interface UserProps {
    name?: string;
    age?: number;
    isOnline?: boolean;
}



export const User = (props : UserProps) => {
    return ( 
    <div className={props.isOnline ? "online" : "offline"}>
  {props.isOnline ? "En ligne" : "Hors ligne"} - {props.name} ({props.age} ans)
</div> );
}