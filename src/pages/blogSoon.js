import React from "react";
import { Page, Section, Animation, Seo } from "gatsby-theme-portfolio-minimal";

export default function BlogSoonPage() {
  return (
    <>
      <Seo title="Blog Coming Soon" />
      <Page>
        <Animation type="fadeUp">
          <Section anchor="blogSoon" heading="">
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '50vh',
              textAlign: 'center',
              padding: '2rem'
            }}>
              <h1 style={{ 
                fontSize: '3rem', 
                fontWeight: 'bold',
                marginBottom: '1.5rem' 
              }}>
                BLOG SOON
              </h1>
              <p style={{ fontSize: '1.2rem' }}>
                I'm working on some interesting content. Check back later!
              </p>
            </div>
          </Section>
        </Animation>
      </Page>
    </>
  );
}