import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

// {props.children} 각 페이지안에서 코딩한 내용이 들어감
// function SectionHeading({children}: SectionHeadingProps) 이렇게 해도 되는데 그럼 밑에 {props.children}자리에 props를 지우고 children만 입력
export default function SectionHeading(props: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {props.children}
    </h2>
  );
}
