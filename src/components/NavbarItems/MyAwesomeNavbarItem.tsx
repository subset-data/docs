import Link from '@docusaurus/Link';
import { useHistory, useLocation } from '@docusaurus/router';
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import React from 'react';
import { useBoolean } from 'usehooks-ts';
import Bracket from './Bracket';

const main_routes = ['blog', 'release', 'learn']
const isCurrentRoute = (to: string, pathname: string) => {
    const path = pathname.split('/');
    const to_split = to.split('/');
    if (path[1] === to_split[1]) {
        return true;
    } else {
        if (to === '/' && main_routes.indexOf(path[1]) === -1) {
            return true;
        }
    }
    return false;
}

const MyAwesomeNavbarItem = ({ label, to, is_base, ...props }: any) => {
    const { value: hovered, setTrue: setHoveredTrue, setFalse: setHoveredFalse } = useBoolean(false);
    const { value: clicked, setTrue: setClickedTrue, setFalse: setClickedFalse } = useBoolean(false);
    const theme = useTheme()
    const location = useLocation();
    const history = useHistory();

    const selected = isCurrentRoute(to, location.pathname);
    const variants = {
        'initial': { scale: 1.0 },
        'clicked': { scale: 0.9 }
    }
    const href = (props.docId) ? `${to}/${props.docId}`.replace('//','/') : to
    return <MuiLink
        underline="none"
        color={theme.palette.text.primary}
        component={Link}
        sx={{
            cursor: 'pointer',
            '&:hover': {
                color: theme.palette.text.primary
            },
            userDrag: 'none',
            userSelect: 'none'
        }}
    >
        <Stack
            direction="row"
            alignItems="center"
            ml={1}
            draggable="true"
            onClick={() => { console.log(href); history.push(href); }}
            onMouseOver={setHoveredTrue}
            onMouseOut={setHoveredFalse}
            onMouseDown={setClickedTrue}
            onMouseUp={setClickedFalse}
            onDragLeave={setClickedFalse}
            onDragEnd={setClickedFalse}
        >
            <Bracket {...{ hovered, clicked, selected }} />
            <Typography
                component={motion.p}
                variants={variants}
                initial="initial"
                variant="subtitle2"
                animate={(clicked && !selected) ? "clicked" : "initial"}
            >
                {label}
            </Typography>
            <Bracket {...{ hovered, clicked, selected }} flip />
        </Stack>
    </MuiLink>

}

export default MyAwesomeNavbarItem;