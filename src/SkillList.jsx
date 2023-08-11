import React from 'react'
import SkillListItem from './SkillListItem'
import './SkillListItem.css';

export default function SkillList({skills}) {
  // Any app logic, etc. goes here
  const skillListItems = skills.map((skill, idx) => (
    <SkillListItem key={idx} skill={skill} />    
  ));
  // Return the UI as JSX
  return (    
    <ul className='padding-0'>
      {skillListItems}        
    </ul>    
  )
}
