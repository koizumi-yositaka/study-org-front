import { Link, LinkProps } from "@tanstack/react-router";
import { useDesignContext } from "../../../context/designContext";

// `linkFactory`のプロパティ型
export interface LinkFactoryProps extends LinkProps{
  className?: string
}

export const LinkFactory = ({className,children,...props}:LinkFactoryProps) => {
    const {isDummy} = useDesignContext()
    console.log("dumy",isDummy)
  if (isDummy) {
    return <span className={`text-gray-500 ${className}`}>Dummy</span>;
  }

  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  );
}
