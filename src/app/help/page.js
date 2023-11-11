"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./help.module.scss";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation/Navigation";

const steps = [
  {
    title: "Welcome to the Help Center",
    description:
      "Urna nibh adipiscing phasellus pellentesque est. Aliquam gravida ut ultrices id elit ultrices libero maecenas dui. Aenean posuere dictumst duis rutrum vitae amet.",
    image: "/slider-01.png",
  },
  {
    title: "Welcome to the Help Center2",
    description:
      "Urna nibh adipiscing phasellus pellentesque est. Aliquam gravida ut ultrices id elit ultrices libero maecenas dui. Aenean posuere dictumst duis rutrum vitae amet.",
    image: "/slider-02.png",
  },
  {
    title: "Welcome to the Help Center4",
    description:
      "Urna nibh adipiscing phasellus pellentesque est. Aliquam gravida ut ultrices id elit ultrices libero maecenas dui. Aenean posuere dictumst duis rutrum vitae amet.",
    image: "/slider-03.png",
  },
];

export default function Help() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const next = () => {
    if (step === steps.length - 1) {
      // redirect to planner
      router.push("/planner", { scroll: false });
    }
    setStep(step + 1);
  };

  const previous = () => {
    if (step === 0) return console.log("start");
    setStep(step - 1);
  };

  const ComponentToRender = () => {
    const Step = ({ title, description, image }) => (
      <div className={styles.step}>
        <Image
          src={image}
          alt=""
          width={355}
          height={320}
          className={styles.image}
        />
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    );

    const stepToRender = steps?.map((item, index) => ({
      ...item,
      component: Step,
      order: index,
    }));

    const renderSteps = () => {
      const [CurrentStepComponent] = stepToRender.filter(
        (component) => component.order === step
      );
      return CurrentStepComponent ? (
        <CurrentStepComponent.component
          title={CurrentStepComponent.title}
          description={CurrentStepComponent.description}
          image={CurrentStepComponent.image}
        />
      ) : null;
    };

    return renderSteps(step);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Navigation />
        <ComponentToRender />
        <div className={styles.links}>
          <div className={styles.link}>
            <Image
              alt=""
              src="/chevron_left-black.svg"
              width={30}
              height={30}
            />
            <div onClick={previous}>Previous</div>
          </div>
          <div className={styles.link}>
            <div onClick={next}>Next</div>
            <Image
              alt=""
              src="/chevron_right-black.svg"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
