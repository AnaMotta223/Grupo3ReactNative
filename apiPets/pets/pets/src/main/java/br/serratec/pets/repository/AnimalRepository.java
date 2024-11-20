package br.serratec.pets.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.serratec.pets.domain.Animal;

public interface AnimalRepository extends JpaRepository<Animal, Long> {

}
