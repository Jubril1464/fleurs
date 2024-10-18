import { SVGProps } from "react";
type Props = {
  height?: number;
  width?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
export const Folder = ({
  height = 17,
  width = 24,
  color = "black",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.80001 2.49998H0.936007C0.492007 2.49998 0.0480075 2.88398 0.108008 3.50798L1.98001 15.496C1.98001 15.496 4.20001 6.66398 4.63201 4.53998C4.76401 3.90398 5.36401 3.69998 5.80801 3.69998H12C12 3.69998 11.16 1.20398 11.076 0.927976C10.932 0.399976 10.668 0.0999756 10.14 0.0999756H6.16801C5.73601 0.0999756 5.32801 0.375976 5.20801 0.867976C5.10001 1.34798 4.80001 2.49998 4.80001 2.49998ZM10.656 2.49998H5.85601C5.85601 2.49998 6.36001 1.29998 6.90001 1.29998H9.45601C10.032 1.29998 10.656 2.49998 10.656 2.49998ZM3.20401 16C2.83201 16.564 2.29201 16.9 1.69201 16.9H20.568C21.216 16.9 21.672 16.528 21.804 15.904C22.332 13.276 23.82 5.77598 23.82 5.77598C23.904 5.17598 23.46 4.89998 23.076 4.89998H19.2V3.13598C19.2 2.94398 18.888 2.49998 18.408 2.49998H13.896C13.272 2.49998 12.852 3.19598 12.852 3.19598L12 4.89998H6.70801C6.32401 4.89998 5.95201 5.12798 5.88001 5.49998C5.88001 5.49998 3.97201 13.54 3.81601 14.296C3.73201 14.74 3.55201 15.484 3.20401 16ZM18.456 4.89998H13.2C13.2 4.89998 13.896 3.69998 14.556 3.69998H17.304C18.156 3.69998 18.456 4.89998 18.456 4.89998Z"
        fill={color}
      />
    </svg>
  );
};
