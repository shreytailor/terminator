import './Header.module.css';

interface HeaderProps {
  text: string;
}

export function Header(props: HeaderProps) {
  return (
    <div>
      <h1>{props.text}</h1>
      <hr />
    </div>
  );
}
