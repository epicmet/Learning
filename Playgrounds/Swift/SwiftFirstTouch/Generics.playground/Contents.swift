import Foundation

func perform<N: Numeric>(_ op: (N, N) -> N, on lhs: N, and rhs: N) -> N {
  op(lhs, rhs)
}

let x = perform(+, on: 2.2, and: 3.3)

// You can't do this!?
// perform<Int>(-, on: 3.3, and: 3)

extension [String] {
  func longestString() -> String? {
    self.sorted { (lhs: String, rhs: String) -> Bool in
      lhs.count > rhs.count
    }.first
  }
}

let arr = [
  "Foo",
  "Bar Baz",
  "Qux"
]

arr.longestString()

protocol View {
  func addSubView(_ view: View)
}

extension View {
  func addSubView(_ view: View) {
    // empty
  }
}

struct Button : View {
  
}

struct Table: View {
  
}

protocol PresentableAsView {
  associatedtype ViewType: View
  func presentView() -> ViewType
  func configure(superView: View, thisView: ViewType)
  func present(view: ViewType, on superView: View)
}

extension PresentableAsView {
  func configure(superView: View, thisView: ViewType) {
    // empty
  }
  func present(view: ViewType, on superView: View) {
    superView.addSubView(view)
  }
}

struct SuccessButton: PresentableAsView {
  func presentView() -> Button {
    Button()
  }
  func configure(superView: View, thisView: Button) {
    // Some configuration
  }
}

extension PresentableAsView where ViewType == Button {
  func doSomethingWithButton() {
    
  }
}

let b = SuccessButton()
b.doSomethingWithButton()

struct FinanceTable: PresentableAsView {
  func presentView() -> Table {
    Table()
  }
  func configure(superView: View, thisView: Table) {
    // Some configuration
  }
}

let t = FinanceTable()
// No doSomethingWithButton, Cool extensions Swift!
// t.
