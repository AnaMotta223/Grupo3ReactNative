package br.serratec.pets.domain;

import com.fasterxml.jackson.annotation.JsonCreator;

import br.serratec.pets.exception.EnumValidationException;

public enum Tipo {
	CACHORRO, GATO, PASSARO, COELHO, HAMSTER, PEIXE;

	@JsonCreator
	public static Tipo verifica(String valor) throws EnumValidationException{
		for (Tipo c : values()) {
			if(valor.equals(c.name())) {
				return c;
			}
		}
		throw new EnumValidationException("Tipo preenchido incorretamente");
		
	}
}
