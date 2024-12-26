import { LitElement, html, css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

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
  @property({ type: Boolean })
  hideCompleted = false;

  @query('#newitem')
  input!: HTMLInputElement;

  override render() {
    const items = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems;
    const todos = html`
      <ul>
        ${items.map(
          (item) =>
            html`<li
              class=${item.completed ? 'completed' : ''}
              @click=${() => this.toggleCompleted(item)}
            >
              ${item.text}
            </li>`
        )}
      </ul>
    `;

    return html`
      <h2>todo list</h2>
      ${todos}

      <input id="newitem" aria-label="New Item" />
      <button @click=${this.addTodo}>add</button>
      <br />
      <label>
        <input
          type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}
        />
        hide completed
      </label>
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

  setHideCompleted(e: Event) {
    this.hideCompleted = (e.target as HTMLInputElement).checked;
  }
}
