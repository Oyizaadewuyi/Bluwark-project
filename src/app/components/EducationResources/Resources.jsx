import React from 'react'
import style from './style.module.css'
import Frame291 from '../../components/Assets/images/Frame291.png'

export const Resources = () => {
  return (
    <main> 
       <div className={style.resource1Container}>
        <h5>What is Cybersecurity?</h5>
        <p>
Cybersecurity encompasses the practices, technologies, and processes designed to<br/>
protect computers, networks, data, and systems from unauthorized access,<br/>
cyberattacks, and damage. It involves safeguarding against a wide range of threats,<br/>
including malware, phishing, ransomware, data breaches, and more.</p>
<button type='submit' className={style.resourceBtn}>
    Button &gt;
</button>

</div>
<img src={Frame291} alt="Frame291" className={style.resourcesImg} />

<div className={style.resource1Container}>
    <h5>Why is Cyber security Important?</h5>
    <p>
With the increasing reliance on digital technologies, the risks associated with cyber threats have also escalated.<br/>
Cyber attacks can result in financial loss, identity theft,privacy breaches, disruption of services,<br/>
 and reputational damage. By implementing cyber security measures, individuals and<br/>
organizations can mitigate these risks and ensure the integrity,<br/>
 confidentiality, and availability of their digital assets</p>

<button type='submit' className={style.resourceBtn}>
    Button &gt;
</button>

</div>
<img src={Frame291} alt="Frame291" className={style.resourcesImg} />

<div className={style.resource1Container}>
    <h5>Common Cyber Threats</h5>
<p>
Malware: Malicious software designed to infiltrate, damage, or gain<br/>
unauthorized access to computers and networks.<br/>
Mitigation: Mitigation strategies include using antivirus software, regularly<br/>
updating software to patch vulnerabilities, and implementing network<br/>
segmentation to limit the spread of malware.</p>

<button type='submit' className={style.resourceBtn}>
    Button &gt;
</button>
</div>

<img src={Frame291} alt="Frame291" className={style.resourcesImg} />


 </main>
    
  )
}

