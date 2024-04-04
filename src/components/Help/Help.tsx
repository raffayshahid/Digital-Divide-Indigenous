import React from 'react';
import styles from './Help.module.css';

const Help: React.FC = () => (
  <section className={styles.help}>
    <h2>How You Can Help Bridge the Digital Divide</h2>
    <div>
      <h3>Improving Access to Technology</h3>
      <p>Technology is a gateway to vast resources and opportunities. However, not everyone has equal access to computers or high-speed internet, especially in rural and remote communities. By supporting initiatives that provide affordable or donated technology and advocating for the expansion of public Wi-Fi, you help enable essential digital access for education, job seeking, and social inclusion.</p>
      <a href="https://www.ic.gc.ca/eic/site/139.nsf/eng/h_00002.html" target="_blank" rel="noopener noreferrer">Canada's Connectivity Strategy</a>
    </div>
    <div>
      <h3>Digital Literacy Training</h3>
      <p>Digital literacy goes beyond the ability to use a smartphone or browse the internet; it involves understanding how to navigate digital platforms safely and responsibly, discern reliable from unreliable sources, and use digital tools to enhance one's livelihood. Volunteering to teach these skills, especially to older adults and other underserved populations, empowers individuals with the knowledge to participate fully in our digital world.</p>
      <a href="https://mediasmarts.ca/" target="_blank" rel="noopener noreferrer">Get Involved with MediaSmarts</a>
    </div>
    <div>
      <h3>Advocating for Equitable Policies</h3>
      <p>Policy change can have a wide-reaching impact on digital equity. By advocating for policies that promote universal access to high-speed internet and digital education, you're helping shape a future where everyone has the tools they need to succeed. This includes supporting initiatives that aim to make broadband internet accessible and affordable for all Canadians, regardless of their income or where they live.</p>
      <a href="https://crtc.gc.ca/eng/internet/internet.htm" target="_blank" rel="noopener noreferrer">CRTC's Internet Policy and Regulation</a>
    </div>
    <div>
      <h3>Encouraging Private Sector Investment</h3>
      <p>The private sector's involvement is crucial in closing the digital divide. Companies can invest in infrastructure that expands internet access to underserved areas and can form partnerships to provide technology and training to those in need. Encouraging businesses to take part in these efforts not only benefits the community but can also help companies reach new markets and build goodwill.</p>
      <a href="https://www.ic.gc.ca/eic/site/icgc.nsf/eng/h_07029.html" target="_blank" rel="noopener noreferrer">Partnership Opportunities</a>
    </div>
    <div>
      <h3>Join the Conversation</h3>
      <p>One of the simplest yet most effective ways to contribute is by raising awareness. Discussing the digital divide in your network, sharing information, and engaging in conversations online can help highlight the importance of digital inclusion. Spreading the word increases understanding, support, and potentially drives more people to take action.</p>
      <a href="https://twitter.com/hashtag/digitaldivide" target="_blank" rel="noopener noreferrer">Join the #DigitalDivide Conversation on Twitter</a>
    </div>
  </section>
);

export default Help;
