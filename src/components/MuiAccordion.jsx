import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MuiAccordion() {
  const [Expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Accordion
        expanded={Expanded === "panel1"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          arial-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            possimus ratione, necessitatibus voluptate nostrum consequatur iusto
            sed velit rem voluptatibus voluptatem, sequi iure obcaecati neque
            unde porro temporibus quo. Sunt?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={Expanded === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          arial-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            possimus ratione, necessitatibus voluptate nostrum consequatur iusto
            sed velit rem voluptatibus voluptatem, sequi iure obcaecati neque
            unde porro temporibus quo. Sunt?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={Expanded === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          arial-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            possimus ratione, necessitatibus voluptate nostrum consequatur iusto
            sed velit rem voluptatibus voluptatem, sequi iure obcaecati neque
            unde porro temporibus quo. Sunt?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default MuiAccordion;
