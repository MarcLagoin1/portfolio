import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaLaptopCode } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Timeline.css";

export const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timeline-container">
        <h1>My Timeline</h1>
        <VerticalTimeline layout="1-column-left">
          <VerticalTimelineElement
            className="timeline-elt"
            contentStyle={{ background: "white", color: "rgb(0, 0, 0)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="February 2024 - August 2024"
            iconStyle={{
              background: "hsl(198.6 88.7 48.4)",
              color: "rgb(39, 40, 34)",
            }}
            icon={<FaLaptopCode />}
          >
            <h3>Industrial Vision Intern</h3>
            <h4>EssilorLuxottica</h4>
            <h5>Paris, France</h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-elt"
            contentStyle={{ background: "white", color: "rgb(0, 0, 0)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="September 2023 - January 2023"
            iconStyle={{
              background: "hsl(198.6 88.7 48.4)",
              color: "rgb(39, 40, 34)",
            }}
            icon={<FaLaptopCode />}
          >
            <h3>5G Baseband Test and Integration Intern</h3>
            <h4>Nokia</h4>
            <h5>Paris, France</h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-elt"
            contentStyle={{ background: "white", color: "rgb(0, 0, 0)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="March 2023 - December 2023"
            iconStyle={{
              background: "hsl(198.6 88.7 48.4)",
              color: "rgb(39, 40, 34)",
            }}
            icon={<FaLaptopCode />}
          >
            <h3>Data engineering project</h3>
            <h4>French Tax Departement DGFIP</h4>
            <h5>Paris, France</h5>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};
