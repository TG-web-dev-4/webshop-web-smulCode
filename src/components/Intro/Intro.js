import React from "react";
import {
  StyledIntro,
  Cta,
  Cta1,
  Cta2,
  Cta3,
  Cta4,
  Cta5,
  Cta6,
  CtaText,
  BrandName,
} from "./Intro.styled";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Intro = () => {
  const StyledIntroRef = useRef(null);
  const Cta1Ref = useRef(null);
  const Cta2Ref = useRef(null);
  const Cta3Ref = useRef(null);
  const Cta4Ref = useRef(null);
  const Cta5Ref = useRef(null);
  const Cta6Ref = useRef(null);

  useEffect(() => {
    const StyledIntro = StyledIntroRef.current;
    const Cta1 = Cta1Ref.current;
    const Cta2 = Cta2Ref.current;
    const Cta3 = Cta3Ref.current;
    const Cta4 = Cta4Ref.current;
    const Cta5 = Cta5Ref.current;
    const Cta6 = Cta6Ref.current;

    const AllCta = [
      Cta1Ref.current,
      Cta2Ref.current,
      Cta3Ref.current,
      Cta4Ref.current,
      Cta5Ref.current,
      Cta6Ref.current,
    ];

    const tl = gsap
      .timeline({ defaults: { duration: 1, ease: "elastic.out(1.2, 1)" } })

      .fromTo(
        AllCta,
        { opacity: 0, scale: 1 },
        { opacity: 1, scale: 1.3, ease: "bounce.in" }
      )

      .fromTo(Cta1, { x: 0, opacity: 0 }, { x: "100%", opacity: 1 }, "<20%")
      .fromTo(Cta3, { x: 0, opacity: 0 }, { x: "-100%", opacity: 1 }, "<20%")
      .fromTo(Cta2, { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")
      .fromTo(
        Cta4,
        { x: 0, opacity: 0 },
        { x: "100%", y: "100%", opacity: 1 },
        "<20%"
      )
      .fromTo(
        Cta6,
        { x: "-100%", opacity: 0 },
        { y: "100%", opacity: 1 },
        "<20%"
      )
      .fromTo(Cta5, { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")

      .fromTo(
        AllCta,
        { opacity: 1, scale: 1.3 },
        { opacity: 1, scale: 1.5, ease: "bounce.in" }
      )

      .fromTo(Cta1, { x: "100%", opacity: 0 }, { y: "100%", opacity: 1 })
      .fromTo(Cta6, { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")
      .fromTo(
        Cta3,
        { x: "-100%", opacity: 0 },
        { y: "100%", opacity: 1 },
        "<20%"
      )
      .fromTo(
        Cta4,
        { x: "100%", y: "100%", opacity: 0 },
        { x: "100%", y: 0, opacity: 1 },
        "<20%"
      )
      .fromTo(Cta2, { y: 0, opacity: 0 }, { y: "100%", opacity: 1 }, "<20%")

      .fromTo(
        AllCta,
        { opacity: 1, scale: 1.5 },
        { opacity: 1, scale: 2, ease: "elastic.out(1.5, 0.1)" },
        "<20%"
      )
     
      .to(AllCta, { color: "white", ease: "power3" })
  
      .to(
        StyledIntro,
        { backgroundColor: "hotpink", ease: "power3.Out", opacity: "0" },
        "<70%"
      )
      .to(StyledIntro, { display:"none" },"<");
  }, []);

  return (
    <StyledIntro ref={StyledIntroRef}>
      <Cta>
        <CtaText>
          <BrandName>
            <Cta1 ref={Cta1Ref}>CHUNK</Cta1>
          </BrandName>
          <BrandName>
            <Cta2 ref={Cta2Ref}>CHUNK</Cta2>
          </BrandName>
          <BrandName>
            <Cta3 ref={Cta3Ref}>CHUNK</Cta3>
          </BrandName>
        </CtaText>
        <CtaText>
          <BrandName>
            <Cta4 ref={Cta4Ref}>CHUNK</Cta4>
          </BrandName>
          <BrandName>
            <Cta5 ref={Cta5Ref}>CHUNK</Cta5>
          </BrandName>
          <BrandName>
            <Cta6 ref={Cta6Ref}>CHUNK</Cta6>
          </BrandName>
        </CtaText>
      </Cta>
    </StyledIntro>
  );
};

export default Intro;
