import './NewSkillForm.css';
import { useState } from 'react';

export default function NewSkillForm() {
  const [newSkill, setNewSkill] = useState({
    name: "",
    level: 3
  });

  function handleAddSkill(evt) {
    evt.preventDefault();
    addSkill(newSkill);
    setNewSkill("");
  }

  return (
    <form onSubmit={handleAddSkill} className="NewSkillForm">
      Skill 
      <input 
        value={newSkill}
        onChange={(evt) => setNewSkill(evt.target.value)}
        className='inputSkill'
      />                
      Level
      <select name="level" className='skillLevel'>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>        
      <button type="submit">ADD SKILL</button>
    </form>
  );
}
