/**
 * Ein Objekt dieser Klasse kapselt ein Paar von Abkürzung (Key) und Array mit
 * zugehörigen Bedeutungen (Value für Key).
 */
export class AbkBedeutung {

    constructor( public abkuerzung : string,
                 public bedeutungen: string[]
               ) {}
}
