import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';

type TodoItem = {
  text: string;
  completed: boolean;
};

@customElement('todo-list')
export class TodoList extends LitElement {
  static override styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

  @state()
  private _listItems = [
    { text: 'start lit tutorial', completed: true },
    { text: 'make todo list', completed: false },
  ];

  @query('#newitem')
  input!: HTMLInputElement;

  override render() {
    return html`
      <h2>todo list</h2>
      <ul>
        ${this._listItems.map(
          (item) =>
            html`<li
              class=${item.completed ? 'completed' : ''}
              @click=${() => this.toggleCompleted(item)}
            >
              ${item.text}
            </li>`
        )}
      </ul>

      <input id="newitem" aria-label="New Item" />
      <button @click=${this.addTodo}>add</button>
    `;
  }

  addTodo() {
    this._listItems = [
      ...this._listItems,
      { text: this.input.value, completed: false },
    ];
    this.input.value = '';
  }

  toggleCompleted(item: TodoItem) {
    item.completed = !item.completed;
    this.requestUpdate();
  }
}
