export interface weatherLocationProps {
  weatherStateInfo: {
    name: string;
    sys: { country: string };
    dt: number;
  };
}
