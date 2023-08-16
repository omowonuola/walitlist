import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Seamless Insurance Process",
  desc: "It eliminates the need for lengthy paperwork, phone calls, and multiple visits to insurance providers. It allows for quick and efficient completion of insurance-related tasks, saving valuable time for vehicle owners.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Convenience",
      desc: "With seamlessclaims process, vehicle owners can handle their insurance needs through our apps, providing convenience and accessibility. They can easily compare quotes, make policy changes, submit claims, and access policy documents at their convenience.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Enhanced customer experience",
      desc: "seamlessclaims process provides a smooth and hassle-free experience for customers. It reduces the frustration and stress often associated with complex insurance procedures. This, in turn, helps to improved our customer satisfaction and loyalty.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Faster claims processing",
      desc: "With seamlessclaims process, claims can be submitted online, accompanied by relevant documents and evidence. This expedites the claims handling process, leading to quicker resolution and reimbursement for vehicle owners.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "More Benefits",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Streamlined communication",
      desc: "Seamlessclaims processes involves using our digital platforms that facilitate effective communication between insurance providers and customers. It allows for timely updates, instant notifications, and efficient resolution of queries or concerns.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Cost-effectiveness",
      desc: "SeamlessClaims insurance process allows vehicle owners to easily compare quotes from different providers, enabling them to find the most competitive rates and coverage options. This promotes cost-effectiveness and helps in making informed decisions based on individual needs and budgets.",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
