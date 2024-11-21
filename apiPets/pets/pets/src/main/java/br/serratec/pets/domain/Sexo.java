package br.serratec.pets.domain;

import com.fasterxml.jackson.annotation.JsonCreator;

import br.serratec.pets.exception.EnumValidationException;

public enum Sexo {
	F("Fêmea"), M("Macho");
	
	private String descricao;
	
	private Sexo(String descricao) {
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}

	@JsonCreator
	public static Sexo verifica(String valor) throws EnumValidationException{
		for (Sexo c : values()) {
			if(valor.equals(c.name())) {
				return c;
			}
		}
		throw new EnumValidationException("Sexo preenchido incorretamente");
		
	}
}
