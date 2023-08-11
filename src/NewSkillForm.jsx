import './NewSkillForm.css';
import { useState } from 'react';

const defaultValue = {
  name: '',
  level: 3
}

export default function NewSkillForm({addSkill}) {
  const [newSkill, setNewSkill] = useState(defaultValue);

  function handleAddSkill(evt) {
    evt.preventDefault();
    addSkill(newSkill);
    setNewSkill(defaultValue);
  }
  function handleChange(evt) {
    setNewSkill({...newSkill, [evt.target.name]: evt.target.value})
  }

  return (
    <form onSubmit={handleAddSkill} className="NewSkillForm">
      Skill 
      <input 
        name='name'
        value={newSkill.name}
        onChange={handleChange}
        className='inputSkill'
        placeholder='Add skill'
        pattern='.{3,}'
        required
      />                
      Level
      <select 
        value={newSkill.level} 
        name="level" 
        className='skillLevel' 
        onChange={handleChange}
      >
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
