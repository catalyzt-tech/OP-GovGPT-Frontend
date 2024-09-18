import { Icon } from "@iconify/react";
import React from "react";

export type FeatureCategory = {
    key: string;
    title: string;
    icon: React.ReactNode;
    descriptions: string[];
};

export const featuresCategories: FeatureCategory[] = [
    {
      key: "features",
      title: "Features",
      icon: <Icon icon="solar:mask-happly-linear" width={40} />,
      descriptions: [
        "Provides clear answers on optimism and its benefits",
        "Offers practical advice for maintaining a positive outlook",
        "Displays credible sources and research related to optimism",
      ],
    },
    {
      key: "capabilities",
      title: "Capabilities",
      icon: <Icon icon="solar:magic-stick-3-linear" width={40} />,
      descriptions: [
        "Provides accurate and detailed explanations about optimism-related topics",
        "Fetches and displays relevant sources for deeper insights",
        "Helps users learn how to apply optimism in daily life",
      ],
    },
    {
      key: "limitations",
      title: "Limitations",
      icon: <Icon icon="solar:shield-warning-outline" width={40} />,
      descriptions: [
        "Might occasionally struggle with complex, niche questions about optimism",
        "Relies on available research and may miss newer studies",
        "Optimism-related advice might not apply universally to all personal situations",
      ],
    },
  ];
  