import React from "react";
import FeatureCard from "./feature-card";
import { featuresCategories } from "@/static/feature-categories";

export default function Component() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {featuresCategories.map((category) => (
        <FeatureCard
          key={category.key}
          descriptions={category.descriptions}
          icon={category.icon}
          title={category.title}
        />
      ))}
    </div>
  );
}
