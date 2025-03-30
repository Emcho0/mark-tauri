import { type ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const RootLayout = ({
  className,
  children,
  ...props
}: ComponentProps<"main">) => {
  return (
    <main className={twMerge("flex h-screen flex-row", className)} {...props}>
      {children}
    </main>
  );
};

export const Sidebar = ({
  className,
  children,
  ...props
}: ComponentProps<"aside">) => {
  return (
    <aside
      className={twMerge(
        "mt-10 h-[100vh+10] w-[250px] overflow-auto",
        className,
      )}
      {...props}
    >
      {children}
    </aside>
  );
};

export const Content = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge("h-full flex-1 overflow-auto", className)}
      {...props}
    >
      {children}{" "}
    </div>
  ),
);

Content.displayName = "content";
