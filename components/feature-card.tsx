"use client";

import type { CardProps } from "@nextui-org/react";

import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export type FeatureCardProps = CardProps & {
  title: string;
  descriptions: string[];
  icon: React.ReactNode;
};

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ title, descriptions = [], icon, ...props }, ref) => {
    return (
      <Card ref={ref} className="bg-content2" shadow="none" {...props}>
        <CardHeader className="flex flex-col gap-2 px-4 pb-4 pt-6">
          {icon}
          <p className="text-medium text-content2-foreground">{title}</p>
        </CardHeader>
        <CardBody className="flex flex-col gap-2">
          {descriptions.map((description, index) => (
            <div
              key={index}
              className="flex min-h-[50px] rounded-medium bg-content3 px-3 py-2 text-content3-foreground"
            >
              <p className="text-small">{description}</p>
            </div>
          ))}
        </CardBody>
      </Card>
    );
  },
);

FeatureCard.displayName = "FeatureCard";

export default FeatureCard;
