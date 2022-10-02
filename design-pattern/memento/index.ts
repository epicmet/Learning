class EditorState {
  private state: string = "";

  constructor(state: string) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

class EditorHistory {
  private states: EditorState[] = [];

  push(state: EditorState) {
    this.states.push(state);
  }

  pop() {
    return this.states.pop();
  }
}

class Editor {
  private content: string = '';
  private fontName: string = '';

  public createContentState(): EditorState {
    return new EditorState(this.content);
  }

  public restoreContent(state: EditorState | undefined): void {
    if(!state) {
      return;
    }

    this.content = state.getState();
  }

  public createFontNameState(): EditorState {
    return new EditorState(this.fontName);
  }

  public restoreFontName(state: EditorState | undefined): void {
    if(!state) {
      return;
    }

    this.fontName = state.getState();
  }

  setContent(input: string) {
    this.content = input;
  }

  getContent(): string {
    return this.content;
  }

  setFontName(input: string) {
    this.fontName = input;
  }

  getFontName(): string {
    return this.fontName;
  }
}

const editor = new Editor();
const contentHistory = new EditorHistory();
const fontNameHistory = new EditorHistory();

// Set the font to `Sans`
editor.setFontName('Sans');

// Set the content to `a`
editor.setContent('a');

// Save the content to history and change it
contentHistory.push(editor.createContentState());
editor.setContent('b');

// Save the fontName to history and change it
fontNameHistory.push(editor.createFontNameState());
editor.setFontName('Serif');

// Save the content to history and change it
contentHistory.push(editor.createContentState());
editor.setContent('c');

// Undo the fontName
editor.restoreFontName(fontNameHistory.pop());

// Save the content to history and change it
contentHistory.push(editor.createContentState());
editor.setContent('d');

// Undo the content
editor.restoreContent(contentHistory.pop());
editor.restoreContent(contentHistory.pop());

console.log(`fontName: ${editor.getFontName()}`);
console.log(`content: ${editor.getContent()}`);
