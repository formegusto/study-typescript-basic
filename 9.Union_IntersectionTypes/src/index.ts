interface Bird {
    fly(): void;
    layEggs(): void;
}
  
interface Fish {
    swim(): void;
    layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

// let pet = getSmallPet();

// pet.layEggs();
// 두 개의 잠재적인 타입 중, 하나만 사용 가능!
// pet.fly();

type NetworkLoadingState = {
    state: "loading";
  };
  
  type NetworkFailedState = {
    state: "failed";
    code: number;
  };
  
  type NetworkSuccessState = {
    state: "success";
    response: {
      title: string;
      duration: number;
      summary: string;
    };
  };
  
  // 위 타입들 중 단 하나를 대표하는 타입을 만들었지만,
  // 그것이 무엇에 해당하는지 아직 확실하지 않습니다.
  type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;

    function networkStatus(state: NetworkState): string {
        // 현재 TypeScript는 셋 중 어떤 것이
        // state가 될 수 있는 잠재적인 타입인지 알 수 없습니다.
      
        // state에 swtich문을 사용하여, TypeScript는 코드 흐름을 분석하면서
        // 유니언 타입을 좁혀나갈 수 있습니다.
        switch (state.state) {
          case "loading":
            return "Downloading...";
          case "failed":
            // 여기서 타입은 NetworkFailedState일 것이며,
            // 따라서 `code` 필드에 접근할 수 있습니다.
            return `Error ${state.code} downloading`;
          case "success":
            return `Downloaded ${state.response.title} - ${state.response.summary}`;
        }
      }

      class Person {
        constructor(public name: string) {}
      }
      
      interface Loggable {
        log(name: string): void;
      }
      
      class ConsoleLogger implements Loggable {
        log(name: string) {
          console.log(`Hello, I'm ${name}.`);
        }
      }
      
      // 두 객체를 받아 하나로 합칩니다.
      function extend<First extends {}, Second extends {}>(
        first: First,
        second: Second
      ): First & Second {
        const result: Partial<First & Second> = {};
        for (const prop in first) {
          if (first.hasOwnProperty(prop)) {
            (result as First)[prop] = first[prop];
          }
        }
        for (const prop in second) {
          if (second.hasOwnProperty(prop)) {
            (result as Second)[prop] = second[prop];
          }
        }
        return result as First & Second;
      }
      
      const jim = extend(new Person("Jim"), ConsoleLogger.prototype);
      jim.log(jim.name);