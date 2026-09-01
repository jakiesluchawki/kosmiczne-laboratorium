# Kosmiczne Laboratorium: karta sesji studyjnej

**Status:** LOCK · d4e3485822e7e877 · Mieszko Mahboob
**Zakres:** 121 kwestii · Piotr 17 · Tomek 104
**Szacowane czyste audio:** Piotr 3:25 · Tomek 15:31
**Prywatne review:** dostępne u właściciela projektu; adres nie jest publikowany.


Ta karta prowadzi sesję i odbiór plików. Nie zastępuje scenariusza aktora.
Nagrania wolno rozpocząć dopiero po pełnym LOCK-u tego samego hasha.

## 1. Przed wejściem do studia

- [ ] W głównym review zaznaczono 13 sekcji i pełną akceptację całego scenariusza.
- [ ] Nie ma otwartych komentarzy ani notatek w prawej kolumnie review.
- [ ] Dokumenty aktorów i ta karta pokazują ten sam hash: d4e3485822e7e877.
- [ ] W studiu są otwarte osobne dokumenty Piotra i Tomka, nie dokument zbiorczy.
- [ ] Sesja pracuje w 48 kHz, 24 bit, mono, Linear PCM WAV.
- [ ] Nagrano minimum 15 sekund ciszy pomieszczenia przed pierwszą kwestią.

## 2. Piotr Makowski

**Rola:** gospodarz obserwatorium, opiekun i przewodnik po wejściach do nowych światów.
**Master:** `kosmiczne-laboratorium-lektor-piotr-master.wav`

- [ ] **Wstęp do obserwatorium** · 5 kwestii · około 1:19 czystego audio · `INTRO-001`–`INTRO-005`
- [ ] **Przejścia między pracowniami** · 12 kwestii · około 2:07 czystego audio · `HOST-HOME-001`–`HOST-FINAL-001`

Po przejściach odsłuchaj jedną planszę razem z muzyką docelowego modułu.
Końcówka ma zostawić oddech przed wejściem Tomka, bez tonu zwiastuna.

## 3. Tomek Miller

**Rola:** ciepły przewodnik merytoryczny po przewidywaniu, próbie i wyjaśnieniu.
**Master:** `kosmiczne-laboratorium-lektor-tomek-master.wav`

- [ ] **Odkrycia podstawowe** · 4 kwestii · około 0:53 czystego audio · `DISC-001`–`DISC-004`
- [ ] **Instrukcje do odkryć** · 4 kwestii · około 0:17 czystego audio · `INST-001`–`INST-004`
- [ ] **Masa** · 3 kwestii · około 0:36 czystego audio · `MASS-001`–`MASS-003`
- [ ] **Rzut i orbita** · 11 kwestii · około 1:05 czystego audio · `GRAV-001`–`GRAV-011`
- [ ] **Komunikaty systemowe** · 1 kwestii · około 0:07 czystego audio · `SYS-001`–`SYS-001`
- [ ] **Kosmiczny plac zabaw** · 6 kwestii · około 0:44 czystego audio · `TOMEK-PLAY-OPEN`–`PLAY-005`
- [ ] **Pory roku** · 10 kwestii · około 1:47 czystego audio · `SEAS-001`–`SEAS-010`
- [ ] **Gra orbitalna** · 5 kwestii · około 0:40 czystego audio · `RACE-001`–`RACE-005`
- [ ] **Fazy Księżyca** · 9 kwestii · około 1:18 czystego audio · `MOON-001`–`MOON-009`
- [ ] **Magnes i grawitacja** · 17 kwestii · około 2:13 czystego audio · `MAG-001`–`MAG-017`
- [ ] **Prawdziwe misje kosmiczne** · 34 kwestii · około 5:53 czystego audio · `TOMEK-ASSIST-OPEN`–`ASSIST-033`

## 4. Ujęcia podwójne

- [ ] `INTRO-002` · Piotr Makowski · Wstęp do obserwatorium · 17.0–23.0 s
- [ ] `INTRO-003` · Piotr Makowski · Wstęp do obserwatorium · 15.0–20.0 s
- [ ] `HOST-MISSIONS-001` · Piotr Makowski · Przejścia między pracowniami · 11.5–15.5 s
- [ ] `DISC-001` · Tomek Miller · Odkrycia podstawowe · 16.0–21.0 s
- [ ] `SEAS-001` · Tomek Miller · Pory roku · 13.5–17.5 s
- [ ] `RACE-001` · Tomek Miller · Gra orbitalna · 11.5–15.0 s
- [ ] `MAG-001` · Tomek Miller · Magnes i grawitacja · 16.0–21.0 s
- [ ] `ASSIST-001` · Tomek Miller · Prawdziwe misje kosmiczne · 15.5–20.5 s
- [ ] `ASSIST-008` · Tomek Miller · Prawdziwe misje kosmiczne · 13.0–17.0 s
- [ ] `ASSIST-014` · Tomek Miller · Prawdziwe misje kosmiczne · 11.0–14.5 s
- [ ] `ASSIST-025` · Tomek Miller · Prawdziwe misje kosmiczne · 14.0–18.0 s
- [ ] `ASSIST-030` · Tomek Miller · Prawdziwe misje kosmiczne · 13.0–17.0 s

Ujęcie A powinno być najbardziej naturalne. Ujęcie B może mieć inną pauzę,
cieplejszą końcówkę albo spokojniejsze tempo, ale nie inną treść.

## 5. Wymowa przed wyjściem

- [ ] **Apollo 13:** Apollo trzynaście
- [ ] **Aquarius:** Akwarius
- [ ] **Odyssey:** Odysej
- [ ] **Voyager 2:** Wojadżer dwa
- [ ] **Galileo:** Galile-o
- [ ] **VEEGA:** Wi-ga, wyraźnie, bez literowania
- [ ] **New Horizons:** Niu Horajzons
- [ ] **Parker:** Parker
- [ ] **Mariner 10:** Mariner dziesięć
- [ ] **ferromagnetyk:** ferro-ma-GNE-tyk

## 6. Odbiór plików

- [ ] Każdy master zawiera dokładnie jedno czyste ujęcie każdej kwestii w kolejności dokumentu.
- [ ] Pomiędzy kwestiami pozostawiono 2-3 sekundy pełnej ciszy.
- [ ] W masterze nie ma czytanych ID, slate'ów, rozmów ani błędnych dubli.
- [ ] Nie zastosowano pogłosu, limitera niszczącego dynamikę ani redukcji szumu uszkadzającej głos.
- [ ] Nazwy plików są dokładnie zgodne z kartą.
- [ ] Surowa sesja i osobne eksporty bezpieczeństwa zostały zachowane poza repozytorium.

## 7. Integracja po sesji

```sh
npm run voice:human:preflight:piotr
npm run voice:human:preflight:tomek
npm run voice:human:integrate
```

Polecenie integracji ponownie sprawdza oba mastery, przygotowuje komplet poza
aplikacją i podmienia wszystkie 121 klipów jako jedną transakcję. Każdy M4A
jest mierzony po dekodowaniu, a raport zapisuje jego poziom, czas i SHA-256.
Kontrola pilnuje też spójności poziomu w zestawie aktora oraz balansu median
Piotra i Tomka. Po błędzie audytu, testu albo buildu automatycznie wraca
poprzedni manifest i audio.

Przed publikacją trzeba jeszcze przejść odsłuch offline na iPhonie i iPadzie,
sprawdzić przerwanie audio oraz potwierdzić, że Tomek zaczyna dopiero po
zamknięciu planszy Piotra.
