import { useRef, useState, useEffect } from "react";
import styles from "./IosSegmentedControl.module.scss";

// https://letsbuildui.dev/articles/building-a-segmented-control-component
// https://codesandbox.io/s/react-segmented-control-krgq5?file=/src/App.js:0-41
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-segmented-control-component
 */

type IosSegmentedControlProps = {
  name: string;
  callback: (val: number, index: number) => void;
  segments: { label: string; value: number; ref: any }[];
  defaultIndex: number;
  minWitdh?: number;
  controlRef: any;
};

const IosSegmentedControl = ({
  name,
  segments,
  callback,
  defaultIndex = 0,
  minWitdh,
  controlRef,
}: IosSegmentedControlProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const componentReady = useRef<boolean>();

  // Determine when the component is "ready"
  useEffect(() => {
    componentReady.current = true;
  }, []);

  useEffect(() => {
    const activeSegmentRef = segments[activeIndex].ref;
    const { offsetWidth, offsetLeft } = activeSegmentRef.current;
    const { style } = controlRef.current;

    if (minWitdh !== undefined) {
      style.setProperty("--min-width", `${minWitdh}px`);
      style.setProperty("--highlight-width", `${minWitdh}px`);
      style.setProperty("--highlight-x-pos", `${minWitdh * activeIndex + 4}px`);
    } else {style.setProperty("--highlight-width", `${offsetWidth}px`);
    style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
  }
  }, [activeIndex, callback, controlRef, segments, minWitdh]);

  const onInputChange = (value: number, index: number) => {
    setActiveIndex(index);
    callback(value, index);
  };

  return (
    <div className={styles.ControlsContainer} ref={controlRef}>
      <div className={`${styles.Controls} ${componentReady.current ? styles.Ready : ""}`}>
        {segments?.map((item, i) => (
          <div
            key={item.value}
            className={`${styles.Segment} ${i === activeIndex ? styles.Active : ""}`}
            ref={item.ref}
          >
            <input
              type="radio"
              value={item.value}
              id={item.label}
              name={name}
              onChange={() => onInputChange(item.value, i)}
              checked={i === activeIndex}
            />
            <label htmlFor={item.label}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IosSegmentedControl;
