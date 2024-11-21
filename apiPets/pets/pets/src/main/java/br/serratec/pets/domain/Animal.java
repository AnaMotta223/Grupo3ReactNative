package br.serratec.pets.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "animal")
public class Animal {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "Preencha o campo nome")
	@Column(nullable = false, length = 50)
	@Size(min = 2, max = 50, message = "Nome do animal deve ter entre {min} e {max} caracteres")
	private String nome;
	
	@NotBlank(message = "Preencha o campo idade")
	@Column(nullable = false, length = 100)
	@Size(min = 1, max = 100, message = "Idade do animal deve ter entre {min} e {max} caracteres")
	private String idade;
	
	@NotBlank(message = "Preencha o campo raça")
	@Column(nullable = false, length = 100)
	@Size(min = 2, max = 100, message = "Raça do animal deve ter entre {min} e {max} caracteres")
	private String raca;
	
	private String peso;
	
	@Enumerated(EnumType.STRING) 
	private Tipo tipo;
	
	@Enumerated(EnumType.STRING)
	private Sexo sexo;
	
	private String observacao;
	
	private String localidade;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getIdade() {
		return idade;
	}

	public void setIdade(String idade) {
		this.idade = idade;
	}

	public String getRaca() {
		return raca;
	}

	public void setRaca(String raca) {
		this.raca = raca;
	}

	public String getPeso() {
		return peso;
	}

	public void setPeso(String peso) {
		this.peso = peso;
	}

	public Tipo getTipo() {
		return tipo;
	}

	public void setTipo(Tipo tipo) {
		this.tipo = tipo;
	}

	public Sexo getSexo() {
		return sexo;
	}

	public void setSexo(Sexo sexo) {
		this.sexo = sexo;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}

	public String getLocalidade() {
		return localidade;
	}

	public void setLocalidade(String localidade) {
		this.localidade = localidade;
	}
	
}

