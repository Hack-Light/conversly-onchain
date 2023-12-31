/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    ConverslyRegistry: {
      address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_user",
              type: "address",
            },
          ],
          name: "getAllConversationInfo",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "conversationAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isPrivate",
                  type: "bool",
                },
              ],
              internalType: "struct ConverslyRegistry.ConversationInfo[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getPublicConversations",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "publicConversations",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "bool",
              name: "_isPrivate",
              type: "bool",
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "_participants",
              type: "address[]",
            },
          ],
          name: "startConversation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
  11155111: {
    ConverslyRegistry: {
      address: "0x09C6bD7938785611001D727DA2b0cE222022210C",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_user",
              type: "address",
            },
          ],
          name: "getAllConversationInfo",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "conversationAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isPrivate",
                  type: "bool",
                },
              ],
              internalType: "struct ConverslyRegistry.ConversationInfo[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getPublicConversations",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "publicConversations",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "bool",
              name: "_isPrivate",
              type: "bool",
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "_participants",
              type: "address[]",
            },
          ],
          name: "startConversation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
