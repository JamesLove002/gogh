import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, TextField, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface BasePromptAccordionProps {
    title: string;
    children: React.ReactNode;
    expanded: boolean;
}

export function BasePromptAccordion({
    title,
    children,
    expanded = false
}: BasePromptAccordionProps) {
    return (
        <Accordion expanded={expanded}>
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