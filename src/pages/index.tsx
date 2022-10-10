import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from '@docusaurus/Head';

const theme = createTheme({
    typography: {
        fontFamily: ["Caveat", "Roboto", "Helvetica", "Arial", "sans-serif"].join(',')
    },
    palette: {
        primary: {
            main: "#1976d2",
            dark: "#1135B3",
            light: "#52D0E3"
        },
        secondary: {
            main: '#9c27b0', 
            light: '#915DC8', 
            dark: '#951E85'
        }
    }
});
// {main: '#9c27b0', light: '#ba68c8', dark: '#7b1fa2', contrastText: '#fff'}
function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Docusaurus Tutorial - 5min ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
            </Head>
            <Layout
                title={`Hello from ${siteConfig.title}`}
                description="Subset Documentation />">
                {/* <HomepageHeader /> */}
                <main>
                    {/* <HomepageFeatures /> */}
                </main>
            </Layout>
        </ThemeProvider>
    );
}
