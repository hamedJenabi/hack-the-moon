"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./help.module.scss";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation/Navigation";
import Link from "next/link";

const steps = [
  {
    title: "Set your preferences",
    description:
      "With a few simple steps pick a date, location and activity types you are looking for.",
    image: "/slider-01.png",
  },
  {
    title: "Browse our offers",
    description:
      "Check out the different itineraries we have tailored to your preferences.",
    image: "/slider-02.png",
  },
  {
    title: "Pick an offer you like",
    description:
      "Get weather and travel information for the day of your trip. See a detailed daily plan, contact the venues and book your trip! Pssst, 10% discount when booking with Mastercard.",
    image: "/slider-03.png",
  },
];

export default function Help() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const next = () => {
    if (step === steps.length - 1) {
      // redirect to planner
      router.push("/planner");
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
        <div className={styles.contentContainer}>
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
        <div>
          <Navigation />
          <ComponentToRender />
        </div>
        <div className={styles.links}>
          {step !== 0 ?
            <button className={styles.link} onClick={previous}>
              <Image
                alt=""
                src="/chevron_left-black.svg"
                width={30}
                height={30}
              />
              <div>Previous</div>
            </button>
            :
            <Link href="/planner" className={styles.skipIntro}>
              Skip Intro
            </Link>

          }
          <button className={styles.link} onClick={next}>
            {step >= steps.length - 1 ? <div>Start Planing</div> : <div>Next</div>}
            <Image
              alt=""
              src="/chevron_right-black.svg"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </main>
  );
}
