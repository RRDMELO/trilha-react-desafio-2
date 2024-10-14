import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';

function App() {  
  const [currentRepo, setCurrentRepo] = useState('');  
  const [repos, setRepos] = useState([]);  

  const handleSearchRepo = async () => {    
    try {      
      const { data } = await api.get(`https://api.github.com/repos/${currentRepo}`);      
      if (repos.find(x => x.id === data.id)) return alert("O repositorio ja foi listado anteriormente")
      if (data) {          
        setRepos(prev => [...prev, data]);          
        setCurrentRepo('');          
        return;              
      }      
      return alert('Repositório não encontrado');    
    } catch (error) {      
      alert('Erro ao buscar repositório');    
    }  
  };  

  const handleRemoveRepo = (id) => {    
    setRepos(prev => repos.filter(repo => repo.id !== id));  
  };  

  return (    
    <Container>      
      <img src={gitLogo} width={72} height={72} alt="github logo" />      
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />      
      <Button onClick={handleSearchRepo} />      
      {repos
        .map(repo => (        
          <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />      
        ))}    
    </Container>  
  );
}

export default App;

