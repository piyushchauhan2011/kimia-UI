import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface PriceGroupProps extends Props {
  title: string;
  titleBackground: string;
}

interface PriceItemProps extends Props {
  className?: string;
}
const Price = ({ children }: Props) => (
  <div className="flex flex-wrap mb-6">{children}</div>
);

Price.Group = ({ children, title, titleBackground }: PriceGroupProps) => (
  <div className="w-full md:w-4/12 p-2 md:mb-0">
    <ul className="border border-solid border-gray-400 m-0 p-0 transition-all duration-300 ease-linear">
      <li
        className={`${titleBackground} text-2xl text-center p-5 border-b border-gray-300 text-white`}
      >
        {title}
      </li>
      {children}
    </ul>
  </div>
);

Price.Item = ({ children, className }: PriceItemProps) => (
  <li
    className={`${className} flex justify-center p-5 border-b border-gray-100  text-sm`}
  >
    {children}
  </li>
);

export const PricingTable: FC = () => {
  return (
    <Price>
      <Price.Group title="Basic" titleBackground="bg-blue-600">
        <Price.Item className="text-gray-700 font-bold">
          $ 5.99 / year
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">3 Domains</span>
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">15 GB Storage</span>
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">1 GB Bandwidth</span>
        </Price.Item>
        <Price.Item>
          <CloseIcon />
          <span className="ml-2">24h Support</span>
        </Price.Item>
        <Price.Item>
          <button className="text-sm px-6 py-1 text-white focus:outline-none bg-blue-600">
            Sign up
          </button>
        </Price.Item>
      </Price.Group>
      <Price.Group title="Pro" titleBackground="bg-purple-900">
        <Price.Item className="text-gray-700 font-bold">
          $ 15.99 / year
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">5 Domains</span>
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">30 GB Storage</span>
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">2 GB Bandwidth</span>
        </Price.Item>
        <Price.Item>
          <CloseIcon />
          <span className="ml-2">24h Support</span>
        </Price.Item>
        <Price.Item>
          <button className="text-sm px-6 py-1 text-white focus:outline-none bg-purple-900">
            Sign Up
          </button>
        </Price.Item>
      </Price.Group>
      <Price.Group title="Premium" titleBackground="bg-green-700">
        <Price.Item className="text-gray-700 font-bold">
          $ 29.99 / year
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">10 Domains</span>
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">60 GB Storage</span>
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">5 GB Bandwidth</span>
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">24h Support</span>
        </Price.Item>
        <Price.Item>
          <button className="text-sm px-6 py-1 text-white focus:outline-none bg-green-700">
            Sign Up
          </button>
        </Price.Item>
      </Price.Group>
    </Price>
  );
};

const CheckIcon = () => (
  <svg
    fill="#007E33"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18px"
    height="18px"
  >
    <path
      fill="none"
      stroke="#007E33"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M21 6L9 18 4 13"
    />
  </svg>
);

const CloseIcon = () => (
  <div className="text-3xl -mt-2.5 text-red-600">&times;</div>
);
