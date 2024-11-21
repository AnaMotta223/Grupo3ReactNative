package br.serratec.pets.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.serratec.pets.domain.Animal;
import br.serratec.pets.repository.AnimalRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/animais")
public class AnimalController {
	
	@Autowired
	private AnimalRepository animalRepository;
	
	@GetMapping
	public ResponseEntity<List<Animal>> listar() {
		return ResponseEntity.ok(animalRepository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Animal> buscar(@PathVariable Long id){
		Optional<Animal> AnimalOpt = animalRepository.findById(id);
		if(AnimalOpt.isPresent()) {
			return ResponseEntity.ok(AnimalOpt.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Animal inserir(@Valid @RequestBody Animal Animal) {
		Animal = animalRepository.save(Animal);
		return Animal;
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Animal> atualizar(@PathVariable Long id, @Valid @RequestBody Animal Animal) {
		if(!animalRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		Animal.setId(id);
		Animal = animalRepository.save(Animal);
		return ResponseEntity.ok(Animal);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletar(@PathVariable Long id){
		if(!animalRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}   
		animalRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
}
