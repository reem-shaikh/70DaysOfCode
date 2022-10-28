### Computer Architecture
![](1.JPG)

Computer is a set of hardware comppnents which are interconnected to each other. 

Computer architecture shows how instructions are executed on a micro level 

> What is a program 
Program is a set of instructions required to communicate with the computer. 

> Computer architecture helps in?
When we write a program how are they executed on a hardware level. 

> How does computer understand programs?
Computer understands machine language. Humans understand HLL. Compiler directly converts HLL into LLL(machine code/object code)

![](2.JPG)

> What is computer architecture?
Architecture is an abstract, logical, blueprint of what to do, in order to execute this blueprint we need a bunch of hardware interconnected in a specific design created through computer architecture.

> Important topics 
![](imp.JPG)

### Computer Components 
> Types of computer hardware 
![](hard.jpg)

> Types of computer memory?
![](ram.JPG)
![](../advanceddbms/rom.png)

> Components of motherboard 
The motherboard serves as a single platform to connect all of the parts of a computer together. It connects the CPU, memory, hard drives, optical drives, video card, sound card, and other ports and expansion cards directly or via cables. It can be considered as the backbone of a computer.
![](c1.JPG)
- CPU port(processor - intel ) 
- green port - mouse port 
- purple port - keyboard port 
![](c2.JPG)
- serial port (VGA port) - used for connecting cpu to tv or projector
- parralel port - used for connecting printer and scanner 
- USB port - used for connecting external pentdrive
- LAN cable port - used for connecting ethernet cable for accesing internet over the network 
![](c3.JPG)
- Audio port - for headphones / mic 
- CMOS battery - The CMOS battery powers the BIOS firmware in your laptop [2]. BIOS needs to remain operational even when your computer isn't plugged into a power source. BIOS (basic input/output system) is the program a computer's microprocessor uses to start the computer system after it is powered on
![](bios.JPG)
- BIOS chip
Bios is stored on the bios chip (non volatile - retaining data even when there is no power supply) which is a ROM or flash drive chip.

All BIOS setting are retained in the CMOS chip which includes date and time, boot device priority, hardware setting  stores in CMOS chip (volatile chip - memory lost when power is switched off). Important setting that are require for BIOS are stored in CMOS 
![](cmo.JPG)
CMOS is a memory chip that holds configuration settings and is supported by the onboard battery called CMOS battery (since cmos chip is volatile it needs to consistently be powered (even when comp is switched off) to maintain its settings which is acheived through CMOS battery)

BIOS gets power from SMPS when computer is on and after shutdown computer it gets from CMOS battery.
```bash
SMPS is a PSU (power supply unit) and is usually used in computers to change the voltage to the appropriate range for the computer.
```
- floppy port - to add floppy disks. 
```bash
- Magnetic tape reels 
- punched paper tape reels 
- punched cards 
- floppy disk 
- ZIP drives 
- CDs (CD-ROM and CD-R/RW)
- DVD
- flash drives / pentdrives / usb drives

floppy disk was eventually made obsolete. Many point to 2011 as the year the floppy disk died. That was when SONY stopped making them altogether.
```
- PCI slot - used to add network hardware (router, hubs switches, brudges), sound / video cards
```bash
A video card (also called a display card, graphics card, display adapter, or graphics adapter) is an expansion card which generates a feed of output images to a display device (such as a computer monitor).
The graphics card should go into the first PCI Express x16 slot. However if you want to add an additional graphics card then use the AGP slot 

A sound card (also referred to as an audio card) is a peripheral device that attaches to the PCI slo t on a motherboard to enable the computer to input, process, and deliver sound.
```
![](c4.JPG)
- AGP slot - used for addding extra graphic card 
```bash
An Accelerated Graphics Port (AGP) is a point to point channel that is used for high-speed video output.
```
- heat sink - to get rid of unwanted heat from the cpu 
- RAM slot - used for adding RAM 
- power connector - Power connectors act as the vital link between a device and its source of power. used to power up the PC.

> Difference between RAM & ROM 
ROM is non-volatile memory, which means the information is permanently stored on the chip. The memory does not depend on an electric current to save data, instead, data is written to individual cells using binary code. Non-volatile memory is used for parts of the computer that do not change, such as the initial boot-up portion of the software, or the firmware instructions that make your printer run. Turning off the computer does not have any effect on ROM. Non-volatile memory cannot be changed by users.

RAM is volatile memory, which means that the information temporarily stored in the module is erased when you restart or shut down your computer. Because the information is stored electrically on transistors, when there is no electric current, the data disappears. Each time you request a file or information, it is retrieved either from the computer's storage disk or the internet. The data is stored in RAM, so each time you switch from one program or page to another, the information is instantly available. When the computer is shut down, the memory is cleared until the process begins again. Volatile memory can be changed, upgraded, or expanded easily by users.

> How does system boot?
every time you start or restart computer booting happens, which is the process by which the os is loaded onto the monitor. 
- SMPS needs to work to supply power to the motherboard 
- BIOS, CPU & RAM must be in working condition
- POST (POWER ON SELF TEST) - bios power on all the required external hardware devices (excluding printer) and checks if it works, if even one hardware component not in working condition then it shows an error message, this is accomplished by BIOS and microprocessor in the motherboard. 
```bash
The processor, also known as the CPU, provides the instructions and processing power the computer needs to do its work. The more powerful and updated your processor, the faster your computer can complete its tasks.

Many admins use CPU and microprocessor interchangeably, but the reality is that while a CPU is essentially a microprocessor, not all microprocessors are CPUs.
```
- checks for a booting device (optical disk drive in case the os is not configured in the system yet or storage drive / hard disk drive, it find for os boot files) in the BIOS to load the OS onto the computers RAM.  it will pass control to the operating system. This is called Booting.

boot files that are required to be in 100% working condition for successful loading of the OS 
- command.Com 
- MS-DOS.Sys
- IO.Sys

When we power on a computer, the CPU approaches the BIOS to find out all Input-Output devices and to look over if all hardware connections are properly functioning. BIOS is the one which loads the operating system in to the computer memory, thus completing the booting process.
```bash
BIOS is a part of the motherboard. 

It is stored in the permanent memory called non-volatile Read-only Memory or Erasable Programmable Read-only Memory (EPROM) chip or Flash Memory on the Motherboard of a computer. 

EPROM and Flash memory is used to upgrade the BIOS program as we can change the contents of EPROM and Flash memory.

Flash memory can keep stored data even when power is off.  Flash memory was developed from EEPROM (electronically erasable programmable read-only memory).
```
> What is UEFI (unified extensible firmware interface)?
Newer type of BIOS.
- UEFI has several pros over old BIOS. It has a user friendly GUI interface, it also has a built in feature called secure boot which helps to stop malicious software 

#### Difference between low-level language, assembly language and high level language 
1. Low level language:
Machine language is the low-level programming language. It can only be represented by 0s and 1s. Earlier when we have to create pictures or show data on the screen of the computer then it is very difficult to draw using only binary digits(0s and 1s).For example: To write 120 in the computer system its representation is 1111000. So it is very difficult to learn. To overcome this problem the assembly language is invented.

2. Assembly level language:
Assembly language is the more than low level and less than high-level language so it is intermediary language. Assembly languages use numbers, symbols, and abbreviations instead of 0s and 1. It needs an assembler for conversion to LLL. 

It is a low-level language that allows users to write a program using alphanumeric mnemonic codes, instead of numeric code for a set of instructions examples of large assembly language programs from this time are IBM PC DOS.

3. High-level language :
It is a machine-independent language. It enables a user to write a program in a language that resembles English words and familiar mathematical symbols, COBOL was the first high-level language. Examples of high-level language are python,c#, etc.

It needs a compiler to convert from HLL to LLL.

> Evolution of computer architecture 
![](x1.JPG)
![](x2.JPG)
![](x3.JPG)
![](x4.JPG)
![](x5.JPG)
![](x6.JPG)

#### Unit 1: Fundamentals of Computer Architecture 
![](3.JPG)

> On what factors does the performance of the system depends on?
Based on the way the components are interconnected with each other, the configuration of the system, the generation of the CPU, which components are used.
![](4.JPG)

> Why do we need an OS?
The software usually acts as an interface between the hardware and the user.

> What is a computational model?
The interaction between the hardware components + language required to interact with the computer (OS).

Dont confuse it with the combination of hardware and software which is known as 'network'.

> It has 3 basic abstraction models 
- basic items of computation - In every computer system the basic items of computation is the data 
- problem description model - on basis of problem description the computational model varies 
  - procedural style (describing problem based on algorithm)
  - declarative style (describing problem based of facts and relationship)
- execution model 
  - intrepretion of how to perform the computation 
  - execution semantics 
  - control of execution sequences 

> there are 6 basic computational models which are implemented using the abstraction models above 
- turing model 
- von nuemann model 
- dataflow model 
- applicative model 
- object based model 
- logic based model 

![](5.JPG)
![](6.JPG)
![](bnn.JPG)

> What is an algorithm?
Algorithm is a sequence of steps to perform a particular task. 

#### Von Newman Architecture 
![](8.JPG)
What are the components required for data processing. 
![](7.JPG)
1. Memory consists of data i.e variables / constants we define + Program (set of instructions)
```bash
#data 
int a = 10 
int b = 5

#programs 
c = a+b 

#the arithmetic operation for this program would be performed in the ALU of the CPU 
```
2. CPU consists on ALU (helps persform calculation operations). Registers store temporary data (sequences of bits / flipflops). Register is embedded on top of the control unit which is responsible for timing signal (which instruction would execute in which priorty) and control signal (how to control the registers)
3. Main memory, CPU and IP/OP systems are connected through a bus topology, bus are implemented with the help of multiplexers 
![](00.JPG)

> Types of general purpose registers 
- Registers are sequence of flip-flops / bits 

- Generally registers are of  8bit, 16bit (most common), 32bits size. 

![](ok.JPG)
- Memory (4096 x 16)
```bash
no of words (rows) x word size (bits inside each word)

8bits = 1byte 
16bits = 2byte

4096 is same as 2^12 
each word is of 2 bytes and has an address which is of 12 digits within which 16bits would be stored. 
Note: this address is stored in the address register.

What is a word?
Word is a memory representational unit. Its size could vary from multiple bits. memory is byte addresable. 
```
- address register - fetch data from the address register and give it to the memory which decodes the address and fetches data from that word unit. total size of address register is 12 bits (0-11)
- Data Register - after data is fetched in the memory it is then stored in the data register. total word size is 16bits i.e 0-15bits 
- accumulator - after data is fetched from the memory into the cpu the intermediate data is generally stored in the accumulator before it goes to the ALU. since data is stored here and word size is 16bits, so accumulator size is also 16bits (0-15)
- program counter - points the address of next instruction. since address is represented by 12bits. program counter is 12bits (0-11bits)
- instruction register 
```bash
we know that Memory consists of data and programs (set of instructions)

Instruction format:
I | opcode | operand 

eg: 1 Add 450
I - (most significant bit) which instruction do you want to perform. can be 0 (direct addresing) or 1 (indirect addresing)
opcode - specifies what arithmetic operation to perform 
operand - location where the data is present. its made up of 12 bits since it stores addresses 

we know that the total word size is 16bits 
I/ instruction can be 1 bit. either 1 or 0 
opcode - 3bits 
```
- temporary register - temporarily store data. its of 16 bits
- input register - when you type something on the input device, data is picked and stored in the input register after which its stored in the accumulator. its of 8bits 
- output register - data thats processed from the ALU is stored here and then its send to the output devices (monitor / printer)

> How does the input turn to output?
Whenever you type something in the input field its first stored in the input register then it goes to the accumulator and stays there a bit before it finally goes to the ALU where the processing is done and the processed output is send to the output register where its stored temporarily before its send to the output device. 

> How does a program get executed?
- The data and the program (set of instructions) is stored on the memory layer. the data is feched from here and its send to the CPU which consists of ALU, and a register stored on top of the control unit. 
- In the CPU the program is executed line by line, each instruction is madee up of I (msb), opcode (what is the logical operatio that the program needs to execute), operand (what is the location where the data is stored)
- it takes the address to the address register which then sends this address to the memory which then fetches the data present at that particular location and then its stored in the data register 
-  now the data is fetched and we know what operations to perform in it, now the ALU does its magic and temporarily stores the data in the temporary register 
-  the next instruction location is stored in the program counter and each line of the program is executed line by line 
-  the priorty of which instruction would be executed when would be determined from the timing signal in the control unit 
-  the entire sequence in which data would be stored in the registers would be defined in the control signal in the control unit
------------------

> What is the difference between direct and indirect addressing?
- direct addresing means that as it specifies to the program counter that the data is present on this address we specify only. 

- Indirect addresing means that when you reach the instruction location specified in the operand you will encounter another address link which will link to another location

#### Types of Buses 
CPU generates an address for every word

Based on what they are carrying, buses are classified into three:
- Address bus - addresses are passed through this bus 
- data bus - data fetched from the input device or memory is passed through the databus before its goes to the CPU which contains the registers 
- control bus - carrying control and timing signal 


1. Address bus - wheenver we want to access any address it passes from the address bus. address bus is unidirectional.
```bash
if address bus is 2 bits 
2^3 = 8
it has 8 no of word slots 
its address is of 3bits\
and size inside each word slot is 2Byte = 16bits

but in the above example, 
2^12 = 4096 
it has 4096 no of slots 
its address is of 12 bits 
and size inside each word slot is 2Byte = 16bits
```
considering the above example, 
- address bus is 12bits 
- data bus is 16bits 

2. Data bus is bidirectional - its a medium to transfer data from memory / ip/ op to different components in the CPU where the data processing is done 

3. Control Bus is used to send control and timing signal using a dedicated hardware called the control unit 

### Process VS Threads 
We create a multi-tasking environment with 1 CPU using multi-threading environment 
![](p1.JPG)
![](p2.JPG)
- each process can have multiple threads. we break down each process into sub-processes so we can acheive multi-threading
- process contains data/files, code, stack, register. The thread that is created under the process shares the same code and data as that of the entire process but they create their own stack, registers. but note that: blocking one thread from the process will block the entire process. 

### Process State Diagram 
Whenever a process is started, what stages does the process pass through in its life cycle 
![](n.JPG)

![](lk.JPG)
1. New state: When the process is created and stored (not run yet)
When OS is mounted on the memory alot of background processes start running. This is the secondary memory / Hard disk memory. 
2. Ready Queue: Long term scheduler will take the relevant processes from the secondary memory and push it to the RAM in ready state - multiprogramming.
3. Running stage - one proces is dispatched/ scheduled to the running stage while its  still in RAM since this process need the CPU for execution. Based on whether its a single-processor or multi-processor system the number of processes will be dispatched in the running stage 
4. wait queue/ block - If a process thats running in the running stage (which is in the RAM) wants to access a file in the secondary memory (i/o request) which is now not possible since the execution at the cpu level is mips, so this process at the running stage is now pushed to the waiting stage which is also in the RAM itself, when its i/o request is complete then it can go back in the Ready queue.
5. terminate - after execution the process is deallocated. 

```bash
if a process is already executing in the running stage, but a high priorty process comes up so the high priorty task is pushed to the running stage, and the task that leaves the running stage for the high priorty task to execute is then pushed back to ready state.
```
#### Process creation steps 
![](nn.JPG)
- first the PCB for each process is assigned 
- the address space for a process is allocated in the RAM 
- load the process into the allocated address space of the ready queue
- pass the process to the running stage where the scheduler will allocate the CPU/processor to the process 
- schedulerr will update the PCB state for the particular process 

> Process control Block 
Data structure maintained by OS for every process. 
- PCB keeps all the info needed to keep track of a process.

> What info does the PCB store?
For every process in the PCB it contains this distinctive info:
- process state - what is the current state of a process> running/ ready etc
- process privilidges - priviledges to access system resources 
- process ID - unique ID for each process thats stored in the OS 
- pointer - always points to parent process 
- program counter - points to the next instruction location to be executed 
- CPU registers - used for temporarily storring data 
- CPU scheduling - decided process priorty 
- memory management info - includes info of page tables, memory limits 
- accounting info - amount of CPU used for process execution
- I/O status info - includes list of I/O devices allocated to the process

#### Concurrency 
![](lk.JPG)
- When we have multiple processes and a single CPU then each process will take turns to execute one at a time, through intermediate switching. However switching is happening so fast that it almost seems like all these processes are executing conccurently. So at one time we are processing multiple processes by switching- multitasking. 

![](11.JPG)
- The main challenge is how can we select which process to select for execution. This is accomplished by a scheduling policies:
1. preemption rule 
  - pre-emption - when multi-tasking of procceses occurs and a running process is stopped and put back into the ready state on basis of certain scheduling methods.
> There are many scheduling methods which determine at what constrains will the process be executed, i.e go from ready to running state 
- First-Come, First-Served (FCFS) Scheduling.
- Shortest-Job-Next (SJN) Scheduling.
- Priority Scheduling.
- Shortest Remaining Time.
- Round Robin(RR) Scheduling - when the process is taken from ready to running state it runs for the time quantum assigned, once the time quantum is over, the next process is taken into the running state, this switching of processes is done through short term scheduler.
- Multiple-Level Queues Scheduling.
- Multilevel Feedback Queues Scheduling.
- Highest Response Ratio Next.

2. Selection rule
  - non-pre-emtion- when the complete process that enters running state from ready state is executed at one go and no multitasking occurs 
  
#### Parallel System 
a system is said to be parallel system in which multiple processors have direct access to the shared memory which form a common address space. It is designed to speed up the execution of a program. It is a simultaneous use of multiple compute resources to solve the computational problem.
![](sd.JPG)

- tightly coupled system 
multiple processors work on executing the same process by allocating the cpu space 

> What steps it takes to solve the computational problem?
- one proces is run using multiple CPU cores
- a problem is broken down into discrete parts that can be solved concurrently/ parralelly (say 2 parts)
- each part is again broken down to a series of instructions so that particular part (which is a program (which is a set of instructions)) 
- instruction from each part exeecutes simultanousely on different CPU cires
```bash
- A process is a program 
- Program is a set of instructions 
- The use of parralel system prevails when we use multiple processors to execute that one particular instruction so it executes in quarter the time it wouldve taken to execute it on a single processor 
```
> Applications:
- parallel computing would be 2 servers that share of workload of routing mail, or solving mathematical problem
- supercomputers are usually placed in parralel system architecture 
- terminals are connected to a single server 

> Pros:
- can do multiple things at the same time 
- cost saving and time saving 
- overcoming memory constraints

> Cons:
- Lack of scalabitlity (increase amount) between memory and CPU

> What is parralel execution?
![](pa.JPG)
using multiple CPUs to perform the execution of a single process. similarly another process takes up another buch of multiple CPUs, now the CPUs are typically acting as a server . now multiple CPU's can execute multiple processes's parallely / concurrently / one after the other, which typically means multiple servers can serve multiple clients.

> NOTE: Concurrency can occur with or without parallelism

> classification of parralel processing 
![](pp.JPG)

1. Single Instuction Stream Data (SISD)
![](ss.JPG)
- when the process have a single instruction and single data stream 
- every instruction in the process will be executed one after the other.

2. Single instruction multiple data stream (SIDS)
![](ms.JPG)
- when the process has single instruction and multiple data stream

3. Multiple instruction single data stream (MISD)
- multiple instructions all have just one data stream 
![](misd.JPG)

4. Multiple instruction stream Multiple data stream (MIMD)
- multiple instructions have multiple data streams 
![](mimd.JPG)

> Types of Parallelism 
![](ty.JPG)
![](km.JPG)
1. Bit level Parallelism 
- cpu size is increased so the instruction processing is executed faster

2. Instruction level parallelism 
- group instructions in a particular process and execute that in parralel 

3. task level parallelism 
- divide process into instructions and each of these will be executed by the cpu in parallel

4. Data parallelism
![](lll.JPG)

#### Difference between Multiprogramming, Multitasking, Multithreading & Multiprocessing 
many concepts like multiprogramming, multitasking, multithreading, etc have been introduced to make better CPU utilisation. 

> Multiprogramming
- multi programming is keeping several programs in main memory and executing them concurrently using a single CPU only.
![](multi.JPG)

> Multitasking 
- execute more than one task on one processor concurrently\
 When we have multiple processes and a single CPU then each process will take turns to execute one at a time, through intermediate switching. However switching is happening so fast that it almost seems like all these processes are executing conccurently. So at one time we are processing multiple processes by switching- multitasking. the CPU executes multiple jobs by switching among them typically using a small time quantum, and the switches occur so quickly that the users feel like interact with each executing task at the same time. 

 These multiple tasks share common resources (like CPU and memory).

 - Multitasking allow processes (i.e. programs) to run concurrently on the program. For Example running the spreadsheet program and you are working with word processor also.

> Multithreading 
- Multithreading is running multiple lightweight processes in a single process or program using a single procesor. For Example, When you used a word processor you performs a many different tasks such as printing, formatting text, spell checking and so on. Multithreaded software treats each process as a separate program.

- Context switching between threads is usually less expensive than between processes. Multithreading focuses on generating computing threads from a single process,

> MultiProcessing 
- execute each task on more than one pprocessor (either multiple cpu's or multiple cores) by allocating the segment of a program to multiple cpus which work together to execute the process faster. 

- Multiprocessing however means parallel execution of multiple processes using more than one processor.  multiprocessing increases computing power by adding CPUs.

- basically executing multiple processes at the same time on multiple processors

#### Levels of Parallelism:
![](pj.JPG)

If we try to execute a sequential program it takes alot of time. 

Any sequential program is divided into a bunch of segments called grain  which is executed parallely on seperate CPU's is called parallel execution. the transformation of sequential program to a parallel executable form can be done by a programmer or a compiler. 
```bash
So your telling me having multicores and having more than one processor is the same thing. 

Many computers have more than one processor (CPU). These are sometimes referred to as multi-core systems. The workload of running all of the programs on your computer is shared between the processors. The more processors you have, the more the work can be shared out.
```

- There are nuber of instructions within each grain.The size of the grain is called granual size  or grain size or granuality. Grain size counts the number of instructions in a grain.


> On a broader level, there are 2 types of Parallelism. 
![](pp1.JPG)
1. Available Parallelism that occurs on the processes before its executed 
  - functional parallelism - parallelism thats done based on logic of the process. Its irregular.
  - Data Parallelism - parallelism thats done on data structures like vectors or matrices. Its regular  
2. Utlised Parallelism that occurs on the processes during its execution
  
> Let's dive into the sub section of functinal Parallelism 
- Grain size can be fine / medium / coarse grain based on level of parallelism 

Program consists of 
- instructions 
- loop (instructions)
- procedures (functions)
- subprograms (related parts of the program)
- independent programs

Parrallelism is detetected through compiler which automatically translates the program / process source code to grains which can be recognized by runtime environment 

![](para.JPG)
In case of levels 0f functional parralelism they are 5 levels
1. level 1: instructions          | fine grain
- Which instruction can be parallely executed. 
- grain size would be less than 20 instructions
- 2 - 1000 instructions can be executed parallely 
2. level 2: non recursive loops   | fine grain
- Which non recursive loops can be parallely executed. 
- loop level is the most optimized programming construct to execute parallel 
- grain size would be less than 500 instructions
3. level 3: procedures            | medium grain
- Which procedures can be parallely executed.
- allows user to multitask (concurrent) in a multiprocessor system (parralel)
- grain size would be less than 2000 instructions
4. level 4: subprograms           | medium grain / coarse grain
- Which subprogram can be parallely executed. 
- - allows user to multiprogram (concurrent) in a multiprocessor system (parralel)
- grain size would contain instructions in thousands more than 2k like 3000 etc
- 2 - 1000 instructions can be executed parallely 
5. level 5: independent programs  | coarse grain
- Which independent programs can be parallely executed. 
- multiprocessing happens at this level 
- -grain size more than 10k instructions

As the grain size decreases i.e it goes from level 5 to level 1 its communication demand and scheduling overhead increases and we can acheive more parallelism.

![](f1.JPG)
![](f2.JPG)

#### Fundamentals of Computer Design 
- Computerr designer responsible for hardware architecture of components 
![](cc1.JPG)




























