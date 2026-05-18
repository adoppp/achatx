# Components

1. [Modal](#modal)

## Modal
Modal system is based on React Context + React Portal architecture.
The modal state is globally controlled through *ModalProvider*, while rendering is delegated to *ModalWrapper* and *ModalRoot*.

**Architecture Flow**
```ts
Component
   ↓
useModalContext()
   ↓
openModal({...})
   ↓
ModalProvider updates modal state
   ↓
ModalWrapper reacts to state changes
   ↓
ModalRoot creates React Portal
   ↓
Modal renders into modal-root DOM node
```

**Core Components**

| Component | Responsibility |
|-----------|----------------|
| ModalProvider | Stores modal state and actions|
| useModalContext | Provides access to modal API |
| ModalWrapper | Controls which modal should render |
| ModalRoot | Creates React Portal target|
| ErrorModal | Actual modal content|

**Provider Setup**
Modal system must wrap the entire application.

```ts
    <ModalProvider>
        <App />
        <ModalWrapper />
    </ModalProvider>
```

Current implementation:

```ts
<StrictMode>
    <ModalProvider> // Provider
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
        <ModalWrapper /> // modal
    </ModalProvider>
</StrictMode>
```

**Modal Context API**
- openModal()

Opens modal and injects modal payload.
```ts
openModal({
    type: 'error',
    modalProps: {
        title: 'Error',
        message: 'Something went wrong',
    },
});
```

- closeModal()

Closes active modal.

```ts
closeModal();
```

**Current Modal Types**

| Type | Component |
|------|-----------|
| error | ErrorModal |

**ModalRoot**

ModalRoot is responsible for:

- creating portal DOM node,
- appending it into document.body,
- rendering modal through createPortal().

Portal target:
```html
<div id="modal-root"></div>
```

**ModalWrapper**

ModalWrapper acts as modal renderer.

Responsibilities:

- reads modal state,
- checks active modal type,
- renders corresponding modal component.

Example:
```ts
{modalType === 'error' && <ErrorModal />}
```

**Usage Example**

Form Submit Error Handling
```ts
const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
        await signUpAuth(formState);
    } catch (error) {
        openModal({
            type: 'error',
            modalProps: {
                title: 'Firebase Error',
                message: 'Authentication failed',
            },
        });
    }
};
```

**Adding New Modal**

1. Create modal component
```ts
export const SuccessModal = () => {
    return <div>Success</div>;
};
```

2. Extend modal types in Modal.types.ts
```ts
type ModalType = 'error' | 'success' | null;
```

3. Add renderer into ModalWrapper
```ts
{modalType === 'success' && <SuccessModal />}
```

4. Open modal
```ts
openModal({
    type: 'success',
});
```