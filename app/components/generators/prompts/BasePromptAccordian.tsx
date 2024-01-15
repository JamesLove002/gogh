import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, TextField, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface BasePromptAccordionProps {
    title: string;
    children: React.ReactNode;
    isDefaultExpanded?: boolean;
}

export function BasePromptAccordion({
    title,
    children,
    isDefaultExpanded = false
}: BasePromptAccordionProps) {
    return (
        <Accordion defaultExpanded={isDefaultExpanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            {title}
        </AccordionSummary>
          <AccordionDetails>
            {children}
        </AccordionDetails>
      </Accordion>
    )
}