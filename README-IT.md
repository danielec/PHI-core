================================
			PHI-core
================================
Una serie di utilità, scritte in Javascript, per la creazione facilitata di MooTools

Le funzionalità sono divise in Set, per Set si intende un gruppo di funzioni e variabili,
che svolgono un determinato compito.

Notazioni:
	1- [testo opzionale]: il testo tra parentesi quadrate è opzionale, sia variabili sia risultante
	2- (Uno | Due): una delle due 
	3- {testo}: il testo tra parentesi graffe è solo d'esempio e va inteso come esplicativo di quello che ci sarà in realtà.
	3a- {variabile}: il valore della variabile

I set esistenti sono:
1- PHI
contiene le funzioni principali del plugin e tutti gli altri set
2- CSS
contiene funzioni per la manipolazione degli styleSheet associati alla pagina


Descrizione pacchetti:

PHI
il set base contiene:

Funzioni:
	id([prefix, length]) - ritorna una stringa autogenerata da utilizzare come id, il formato
della stringa è:
		phi-[{prefix}-]{numeri randomizzati di lunghezza ({length} | 10)}
La stringa generata viene controllata per evitare dei doppioni.

	Esempio:
		PHI.id() -> genera una stringa composta da "phi-" e dieci numeri casuali.
		PHI.id('test') -> genera una stringa composta da "phi-test-" e dieci numeri casuali.
		PHI.id('test', 5) -> genera una stringa composta da "phi-test-" e cinque numeri casuali.

Variabili:
	_generatedList {array} - array contenente gli ID generati dalla funzione id() utilizzati per controllare eventuali doppioni.   